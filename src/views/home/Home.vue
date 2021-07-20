<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabBtnClick="tabBtnClick"
      ref="tabControl1"
      v-show="showTab"
      :class="{ isshowtab: showTab }"
    />
    <Scroll
      class="content"
      ref="scroll"
      :probe-type-get="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <home-swiper
        :banners="banners"
        class="home-swiper"
        @swiperImageLoad="swiperImageLoad()"
      />
      <home-recommend :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabBtnClick="tabBtnClick"
        ref="tabControl2"
      />
      <goods-list :goods="goods[currentType].list" />
    </Scroll>
    <Back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import navBar from "components/common/nav_bar/Nav_bar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childHome/HomeSwiper.vue";
import HomeRecommend from "./childHome/HomeRecommend.vue";
import FeatureView from "./childHome/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
      currentType: "pop",
      isShowBackTop: false,
      offsetTop: 0,
      showTab: false,
    };
  },
  components: {
    navBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    if (this.$refs.scroll) {
      const refresh = this.debounce(this.$refs.scroll.refresh, 100);
      this.$bus.$on("imgLoaded", () => {
        //console.log(this)
        refresh();
        
      });
    }

    //监听 control-tab的位置，合适位置显示
  },
  methods: {
    /* 业务相关 */
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    swiperImageLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    tabBtnClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      if (-position.y >= this.offsetTop) {
        this.showTab = true;
      } else {
        this.showTab = false;
      }
    },
    backClick() {
      if (this.$refs.scroll) this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /* 网络请求 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //console.log(res.data.recommend.list)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //刷新上拉加载

         this.$refs.scroll.finishPullUpF();
      });
    },
  },
};
</script>

<style scoped>
#home .content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; */
}
#home .home-nav {
  background-color: #ff8198;
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

#home .isshowtab {
  position: relative;
  z-index: 11;
}
#home {
  position: relative;
  height: 100vh;
}
</style>

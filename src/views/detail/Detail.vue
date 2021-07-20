<template>
  <div class="detail-main" >
    <nav-bar class="detail-nav" />
    <Scroll class="detail-scroll" ref="detailScroll" :returnTop="returnTop" >
      <detail-swiper :topImages="topImages" ref="swiper"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="ImageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </Scroll>
  </div>
</template>

<script>
import NavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
//import { setCookie ,getCookie} from 'common/cookie.js'
//import {debounce} from 'common/debounce.js';
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      returnTop: 0,
      renderComponent: true,
    };
  },
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      (this.topImages = data.itemInfo.topImages),
        (this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        ));
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
    
  },
  methods: {
    ImageLoad() {
      this.$refs.detailScroll.refresh();
      console.log("3434");
      this.$refs.detailScroll.forceRerender()
      // let str = getCookie('count')
      // console.log(str);
      // if (str % 2 ==0) {
      //   console.log("sddsd");
      //   str++;
      //   setCookie('count',str,{})
      //   // this.$router.go(0);
      //   location.reload()
        
      // }
      
    },
  },
  destroyed(){
    // let str = getCookie('count')
    // str++;
    // setCookie('count',str,{})
    // console.log(str);
    
  }
};
</script>

<style>
.detail-main {
  position: relative;
  background: #fff;
  z-index: 9;
  height: 100vh;
}
.detail-main .detail-nav {
  background: #fff;
  position: relative;
  z-index: 9;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  /* overflow: hidden; */
}
</style>
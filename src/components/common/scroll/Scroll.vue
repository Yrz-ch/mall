<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeTypeGet: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
    returnTop: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      scroll: null,
      isCreated: false,
      isGo : 0,
    };
  },
  methods: {
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      //console.log("sdddd")
      this.scroll && this.scroll.refresh();
      
    },
    finishPullUpF() {
      this.scroll && this.scroll.finishPullUp();
    },
    scrollTo(x,y,delay){
      this.scroll && this.scroll.scrollTo(x,y,delay)
    },
  },
  created () {
    console.log("scroll创建");
  },
  destroyed () {
    console.log("scroll销毁");
  },
  mounted() {
    // 1.创建BScroll对象
    if (!this.isCreated) {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeTypeGet,
        pullUpLoad: this.pullUpLoad,
        observeDOM: true,
      });
      this.isCreated = true
      
    }

    //监听下拉幅度
    if (this.probeTypeGet === 2 || this.probeTypeGet === 3) {
      this.scroll.on("scroll", (position) => {
        //console.log('asdasdasd')
        this.$emit("scroll", position);
      });
    }
    //监听是否滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        //console.log('asdasdasd')
        this.$emit("pullingUp");
      });
    }
  
  },
};
</script>

<style scoped>
</style>

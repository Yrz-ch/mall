<template>
  <swiper class="detail-swiper" @load="imgLoaded">
    <swiper-item class="detail-swiper-item" v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
  name: 'DetailSwiper',
  props:{
    topImages:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  created(){
    
  },
  methods: {
    imgLoaded(){
      this.$emit("swiperImageLoad")
    }
  }
}
</script>

<style>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
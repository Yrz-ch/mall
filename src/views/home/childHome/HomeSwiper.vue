<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
        
      </a>
      </swiper-item>  
  </swiper>
  
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name:'HomeSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isShoot: false
    }
  },
  methods: {
    imageLoad(){
      if(!this.isShoot){
        this.$emit('swiperImageLoad')
        this.isShoot = true
      }
    }
  }
}
</script>

<style>

</style>
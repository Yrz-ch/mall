<template> 
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backBtn">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-wrapper">
        <div v-for="(item,index) in titles" :key="item" 
        @click="navClick(index)" 
        :class="{active:currentIndex===index}" class="nav-item">{{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/nav_bar/Nav_bar';
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    navClick(index){
      this.currentIndex = index;
    },
    backBtn(){
      this.$router.go(-1)
    }
  }
}
</script>
  
<style>
.active{
  color:#ff5777;
}
.nav-wrapper{
  display: flex;
  font-size: 14px;
}
.nav-item{
  flex: 1;
}
.back{
  margin-top: 6px;
}
</style>
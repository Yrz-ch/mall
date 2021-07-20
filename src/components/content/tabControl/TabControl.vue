<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" 
    :key="item" 
    @click="tabBtn(index)" 
    :class="{active:currentIndex===index}" class="tabcontrol-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods: {
    tabBtn(index){
      this.currentIndex = index;
      this.$emit('tabBtnClick' ,index);
    }
  }
}
</script>

<style scoped>

.tabcontrol{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background: #fff;
  z-index: 9;
}
.tabcontrol .tabcontrol-item{
  flex: 1;
}
.tabcontrol 
.active{
  color: #ff5777;
}
.active span{
  padding: 10px;
  border-bottom: #ff5777 solid 2px;
}
</style>
<template>
  <div class="tabbarItem" @click="itemBtn">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:"Tab_bar_item",
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return{}
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
            return {color: this.isActive?this.activeColor:''};
        }
    },
    methods:{
        itemBtn(){
            this.$router.replace(this.path);
        }
    }
}
</script>

<style>
.tabbarItem{
  margin-top: 5px;
  text-align: center;
  flex: 1; 
  font-size: 12px; 
}
.tabbarItem img {
    width: 24px;
    height: 24px;
    margin: auto;
}
.active{
    color: red;
}
</style>
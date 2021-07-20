<template>
  <div class="goodlist">
    <goods-list-item class="goods-list-item" v-for="(item,index) in goods" :key="index" :goods-item='item'/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
.goodlist {
  display: flex;
  flex-wrap:wrap-reverse;
  justify-content: space-around;
  padding: 2px;
}

</style>
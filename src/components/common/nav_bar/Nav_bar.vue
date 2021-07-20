<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Nav_Bar'
}
</script>

<style>
  .navbar{
    height: 44px;
    text-align: center;
    display: flex;
    box-shadow: 0px 2px 1px rgba(100, 100, 100, 0.08);
    line-height: 44px;
    /* width: 100%; */
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex:1;
  }
</style>
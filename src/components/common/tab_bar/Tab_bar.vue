<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"Tab_bar"
}
</script>

<style>
#tabbar{
  display: flex;
  height: 49px;
  /* justify-content: space-between; */
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.08)   ;
}
</style>
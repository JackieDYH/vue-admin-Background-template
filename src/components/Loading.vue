<!--
 * @Author: Jackie
 * @Date: 2022-05-10 16:37:43
 * @LastEditTime: 2022-05-10 16:41:29
 * @LastEditors: Jackie
 * @Description: Loading
 * @FilePath: /vue-admin-Background-template/src/components/Loading.vue
 * @version: 
-->
<template>
  <div class="loading">
    <a-spin class="spin" size="large" tip="Loading..." />
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  .spin {
    position: relative;
    top: 40%;
    left: 48%;
  }
}
</style>
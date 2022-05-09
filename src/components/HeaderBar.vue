<!--
 * @Author: Jackie
 * @Date: 2022-05-07 14:41:56
 * @LastEditTime: 2022-05-07 14:43:10
 * @LastEditors: Jackie
 * @Description: HeaderBar
 * @FilePath: /vue-admin-template/src/components/HeaderBar.vue
 * @version: 
-->
<template>
  <a-layout-header class="HeaderBar">
    <div class="logo">MaaS管理平台</div>
    <!-- <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1"> nav 1 </a-menu-item>
        <a-menu-item key="2"> nav 2 </a-menu-item>
        <a-menu-item key="3"> nav 3 </a-menu-item>
      </a-menu> -->
  </a-layout-header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style lang="scss" scoped>
.HeaderBar {
  .logo {
    font-size: 18px;
    padding: 0 10px;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
  }
}
</style>
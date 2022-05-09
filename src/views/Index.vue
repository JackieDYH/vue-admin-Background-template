<!--
 * @Author: Jackie
 * @Date: 2022-05-07 14:31:02
 * @LastEditTime: 2022-05-09 17:31:20
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/views/Index.vue
 * @version: 
-->
<template>
  <a-layout id="layout">
    <HeaderBar />
    <a-layout>
      <SideBar />
      <a-layout class="wrap">
        <a-layout-content class="box">
          <router-view />
          <FooterCopyright />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import FooterCopyright from "@/components/FooterCopyright";
export default {
  components: {
    SideBar,
    HeaderBar,
    FooterCopyright,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#layout {
  height: 100%;
  .wrap {
    margin: 24px;
    .box {
      min-height: 100%;
      background-color: #fff;
    }
    .content {
      background-color: #fff;
      padding: 24px;
      margin: 0;
      min-height: 400px;
    }
  }
}
</style>

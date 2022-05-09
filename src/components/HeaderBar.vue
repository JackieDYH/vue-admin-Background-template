<!--
 * @Author: Jackie
 * @Date: 2022-05-07 14:41:56
 * @LastEditTime: 2022-05-09 14:24:08
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
    <div class="use">
      <!-- :visible="true" 菜单是否显示  :trigger="['click']"-->
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          admin <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <!-- <a-menu-item key="1">
            <a-icon type="user" />
            个人中心
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="setting" />
            设置
          </a-menu-item> -->
          <a-menu-item key="3">
            <a-icon type="logout" />
            退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(visible);
      this.visible = visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.HeaderBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 20px;
  height: 64px;
  background-color: #fff; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  z-index: 1;
  .logo {
    font-size: 20px;
    padding: 0 10px;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .use {
    .ant-dropdown-link {
      color: #fff;
      &:hover {
        color: #9b9b9b;
      }
    }
  }
}
</style>
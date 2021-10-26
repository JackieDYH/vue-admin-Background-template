<!--
 * @Author: Jackie
 * @Date: 2021-10-25 16:49:20
 * @LastEditTime: 2021-10-26 12:47:11
 * @LastEditors: Jackie
 * @Description: 侧边导航
 * @version: 
-->
<template>
  <div class="side">
    <div class="logo">
      <h1>集集管理系统</h1>
    </div>
    <!-- @select="handleselect" -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
      unique-opened
      background-color="#545C64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item, index) in $router.options.routes">
        <div v-if="!item.hidden" :key="index">
          <el-submenu :index="index + ''" v-if="!item.leaf">
            <template slot="title">
              <i :class="item.iconCls"></i>
              {{ item.meta.title }}
            </template>
            <el-menu-item
              v-for="child in item.children"
              :index="child.path"
              :key="child.path"
              v-show="!child.hidden"
            >
              <i :class="child.iconCls"></i>
              {{ child.meta.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-if="item.leaf && item.children.length > 0"
            :index="item.children[0].path"
          >
            <template slot="title">
              <i :class="item.iconCls"></i>
              {{ item.children[0].meta.title }}
            </template>
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.side {
  .logo {
    height: 60px;
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-menu {
    width: 100%;
    height: 100%;
  }
}
</style>
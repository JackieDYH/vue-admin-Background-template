<!--
 * @Author: Jackie
 * @Date: 2021-10-25 16:49:20
 * @LastEditTime: 2021-10-25 18:31:14
 * @LastEditors: Jackie
 * @Description: 侧边导航
 * @version: 
-->
<template>
  <div class="side">
    <div class="logo">
      <h1>集集管理系统</h1>
    </div>
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item, index) in $router.options.routes">
        <div v-if="!item.hidden" :key="index">
          <el-submenu :index="index + ''" v-if="!item.leaf">
            <template slot="title">
              <i class="iconfont" :class="item.iconCls"></i>
              {{ item.meta.title }}
            </template>
            <el-menu-item
              v-for="child in item.children"
              :index="child.path"
              :key="child.path"
              v-show="!child.hidden"
            >
              <i class="iconfont" :class="child.iconCls"></i>
              {{ child.meta.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-if="item.leaf && item.children.length > 0"
            :index="item.children[0].path"
          >
            <i :class="item.iconCls"></i>
            {{ $t(item.children[0].name) }}
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
  }
}
</style>
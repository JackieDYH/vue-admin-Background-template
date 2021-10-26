<!--
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2021-10-26 14:19:56
 * @LastEditors: Jackie
 * @Description: 后台管理入口页面-根
 * @version: 
-->
<template>
  <div class="index">
    <el-container>
      <el-aside width="230px">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header height="60px">
          <HeaderBar />
        </el-header>
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import SideBar from "@/components/SideBar";
export default {
  name: "Index",
  components: {
    HeaderBar,
    SideBar,
  },
};
</script>
<style lang="scss" scoped>
.index {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header,
    .el-footer {
      color: #333;
      background-color: #fff;
      /* text-align: center;
      line-height: 60px; */
    }

    .el-aside {
      background-color: #545c64;
      color: #333;
      /* text-align: center;
      line-height: 200px; */
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      /* text-align: center;
      line-height: 160px; */
    }
  }
}
</style>

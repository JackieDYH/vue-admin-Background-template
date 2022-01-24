<!--
 * @Author: Jackie
 * @Date: 2021-10-25 16:49:20
 * @LastEditTime: 2022-01-24 19:03:59
 * @LastEditors: Jackie
 * @Description: 头部
 * @version: 
-->
<template>
  <div class="header">
    <!-- 面包屑导航 -->
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <!-- 用户退出1 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userInfo.name }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided @click.native="dialogVisible = true">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 用户退出1 -->
    <!-- <el-dropdown @command="handleCommand" menu-align="start">
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="pwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="signout"> 退出登录 </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <!-- 弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="20%"
      :before-close="handleClose"
    >
      <span>您确定要退出吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false"> 取 消</el-button>
        <el-button type="primary" @click="logout"> 确 定 </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tipsmixin from "@/common/mixins/tipsmixin";
export default {
  name: "HeaderBar",
  mixins: [tipsmixin],
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    ...mapGetters("leCube", ["userInfo", "isLogin"]),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions("leCube", ["userInfoSync", "isLoginSync"]),
    // async handleCommand(command) {
    //   if (command == "pwd") {
    //     alert("修改密码功能");
    //   } else if (command == "signout") {
    //     const res = { status: 1 };
    //     // const res = await signout();
    //     if (res.status == 1) {
    //       this.$message({
    //         type: "success",
    //         message: "退出成功",
    //       });
    //       this.$router.push("/login");
    //     } else {
    //       this.$message({
    //         type: "error",
    //         message: res.message || "退出失败",
    //       });
    //     }
    //   }
    // },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    logout() {
      this.dialogVisible = false;
      this.outLogin();
      // this.$router.push({ name: "Login" });
    },
  },
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-dropdown {
    margin-left: 10px;
    .el-dropdown-link {
      font-size: 16px;
      cursor: pointer;
      color: #333;
    }
    .el-icon-arrow-down {
      font-size: 16px;
    }
  }
}
</style>
<!--
 * @Author: Jackie
 * @Date: 2021-10-25 16:49:20
 * @LastEditTime: 2021-10-25 17:49:42
 * @LastEditors: Jackie
 * @Description: 头部
 * @version: 
-->
<template>
  <div class="header">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided @click.native="dialogVisible = true">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
export default {
  name: "HeaderBar",
  data() {
    return {
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    logout() {
      this.dialogVisible = false;
      this.$router.push({ name: "Login" });
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
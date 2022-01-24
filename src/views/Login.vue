<!--
 * @Author: Jackie
 * @Date: 2021-10-25 15:39:32
 * @LastEditTime: 2022-01-24 18:59:02
 * @LastEditors: Jackie
 * @Description: 登录页面
 * @version: 
-->
<template>
  <div class="login-vue">
    <div class="container">
      <p class="title">后台管理系统</p>
      <div class="input-c">
        <el-input placeholder="用户名" v-model="account" clearable> </el-input>
        <p class="error">{{ accountError }}</p>
      </div>
      <div class="input-c">
        <el-input placeholder="密码" v-model="pwd" show-password></el-input>
        <p class="error">{{ pwdError }}</p>
      </div>
      <el-button class="submit" type="primary" @click="submit">登陆</el-button>
      <!-- <p class="account">
        <span @click="register">注册账号</span> |
        <span @click="forgetPwd">忘记密码</span>
      </p> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tipsmixin from "@/common/mixins/tipsmixin";
export default {
  name: "Login",
  mixins: [tipsmixin],
  data() {
    return {
      account: "",
      pwd: "",
      accountError: "",
      pwdError: "",
      isShowLoading: false,
    };
  },
  created() {},
  watch: {
    $route: {
      handler(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    // verifyAccount() {
    //   if (this.account !== "admin") {
    //     this.accountError = "账号为admin";
    //   } else {
    //     this.accountError = "";
    //   }
    // },
    // verifyPwd() {
    //   if (this.pwd !== "admin") {
    //     this.pwdError = "密码为admin";
    //   } else {
    //     this.pwdError = "";
    //   }
    // },
    register() {},
    forgetPwd() {},
    submit() {
      // this.$router.push({ name: "Index" });
      // this.$router.push({ path: "/home" });
      if (this.account !== "" && this.pwd !== "") {
        this.login(this.account, this.pwd);
      }
      // if (this.account === "admin" && this.pwd === "admin") {
      //   this.isShowLoading = true;
      //   // 登陆成功 设置用户信息
      //   localStorage.setItem(
      //     "userImg",
      //     "https://avatars3.githubusercontent.com/u/22117876?s=460&v=4"
      //   );
      //   localStorage.setItem("userName", "小明");
      //   // 登陆成功 假设这里是后台返回的 token
      //   localStorage.setItem("token", "i_am_token");
      //   this.$router.push({ path: this.redirect || "/" });
      // } else {
      //   if (this.account !== "admin") {
      //     this.accountError = "账号为admin";
      //   }
      //   if (this.pwd !== "admin") {
      //     this.pwdError = "密码为admin";
      //   }
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-vue {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: url("~@/assets/images/bg01.jpg");

  .container {
    background: rgba(255, 255, 255, 0.5);
    width: 360px;
    text-align: center;
    border-radius: 10px;
    padding: 40px;
  }
  .title {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .input-c {
    margin: auto;
    width: 280px;
  }
  .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    height: 20px;
  }
  .submit {
    width: 200px;
  }
  .account {
    margin-top: 30px;
    span {
      cursor: pointer;
    }
  }
  .ivu-icon {
    color: #eee;
  }
  .ivu-icon-ios-close-circle {
    color: #777;
  }
}
</style>

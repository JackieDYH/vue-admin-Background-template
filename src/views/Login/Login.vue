<!--
 * @Author: Jackie
 * @Date: 2022-05-07 14:34:06
 * @LastEditTime: 2022-05-09 18:31:53
 * @LastEditors: Jackie
 * @Description: 登录页 用户名-密码-验证码登录方式
 * @FilePath: /vue-admin-Background-template/src/views/Login/Login.vue
 * @version: 
-->
<template>
  <div class="Login">
    <h1 class="title">MaaS链资产管理平台</h1>
    <a-form-model ref="ruleForm" :model="form" :rules="rules">
      <h5>登录</h5>
      <a-form-model-item prop="name">
        <a-input v-model="form.name" placeholder="请输入邮箱/手机号" />
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </a-form-model-item>
      <a-form-model-item prop="code" class="identify">
        <a-input v-model="form.code" placeholder="请输入验证码" />
        <Identify :identifyCode="identifyCode" @click="refreshCode" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button block type="primary" @click="onSubmit"> 提交 </a-button>
        <!-- <router-link
          :to="{ name: 'Password' }"
          style="float: right"
          class="pointer"
        >
          忘记密码
        </router-link> -->
      </a-form-model-item>
    </a-form-model>
    <FooterCopyright />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Identify from "@/components/Identify";
import FooterCopyright from "@/components/FooterCopyright";
export default {
  name: "Login",
  components: { Identify, FooterCopyright },
  data() {
    let validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码为空"));
        return false;
      } else if (value !== this.identifyCode) {
        callback(new Error("验证码不正确"));
        return false;
      } else {
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      form: {
        name: "",
        password: "",
        code: "",
      },
      rules: {
        name: { required: true, message: "请输入邮箱/手机号", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" },
        code: [{ validator: validateCode, trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin"]),
  },
  mounted() {
    // 初始
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    ...mapActions(["userInfoSync", "setisLoginSync"]),
    // 确认
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // 模拟登录
          let { name, password, code } = this.form;
          if (name == "admin" && password == "123456") {
            this.userInfoSync({ name, password });
            this.setisLoginSync(true);
            this.$router.push("/home");
          } else {
            this.$message.error("请检查是否填写正确");
          }
        } else {
          this.$message.error("请检查是否填写正确");
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    // 验证码相关
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 点击刷新验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/bg_repeat_white.png");
  overflow: auto;
  .title {
    font-size: 40px;
    font-weight: bold;
    padding: 60px 0 60px 40px;
  }
  .ant-form {
    width: 500px;
    border-radius: 5px;
    background: #fff;
    margin: auto;
    padding: 18px 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .ant-dropdown-trigger {
      float: right;
      margin-right: -20px;
    }
    h5 {
      font-size: 26px;
      text-align: center;
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    .title {
      font-size: 50px;
      text-align: center;
    }
    .ant-form {
      width: 60%;
    }
  }
  @media screen and (max-width: 769px) {
    .title {
      font-size: 50px;
      text-align: center;
    }
    .ant-form {
      width: 90%;
    }
  }
}
</style>
<style lang="scss">
// 验证码样式
.Login .identify .ant-form-item-children {
  display: flex;
  align-items: center;
  .ant-input {
    flex: 1;
    margin-right: 10px;
  }
}
</style>

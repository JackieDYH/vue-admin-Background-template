<!--
 * @Author: Jackie
 * @Date: 2022-05-31 15:57:54
 * @LastEditTime: 2022-05-31 20:54:36
 * @LastEditors: Jackie
 * @Description: LoginPhone
 * @FilePath: /MaaS_DID_Admin_Client/src/views/Login/LoginPhone.vue
 * @version: 
-->
<template>
  <div class="Login">
    <div class="container">
      <h1 class="title">DID管理平台</h1>
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="{ span: 0 }"
        :wrapper-col="{ span: 24 }"
      >
        <!-- label="手机号" -->
        <a-form-model-item prop="phone">
          <a-input v-model="form.phone" :maxLength="11" placeholder="手机号" />
          <!-- <a-input-group compact>
            <a-select disabled style="width: 25%" default-value="+86">
              <a-select-option value="+86"> +86 </a-select-option>
            </a-select>
            <a-input
              style="width: 75%"
              v-model="form.phone"
              :maxLength="11"
              placeholder="手机号"
            />
          </a-input-group> -->
        </a-form-model-item>
        <!-- <a-form-model-item prop="password">
          <a-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          />
        </a-form-model-item> -->
        <a-form-model-item prop="code" class="identify">
          <a-input
            style="width: 62%"
            v-model="form.code"
            :maxLength="6"
            placeholder="请输入验证码"
          />
          <!-- @keyup.enter.native -->
          <!-- :class="[getCodeBtnDisable ? 'disabled-style' : 'code-style']" -->
          <a-button
            class="btnCode"
            :disabled="getCodeBtnDisable"
            @click="getCode()"
          >
            {{ codeBtnWord }}
          </a-button>
        </a-form-model-item>
        <a-form-model-item>
          <a-button block type="primary" @click="onSubmit"> 登录 </a-button>
          <!-- <router-link
            :to="{ name: 'Password' }"
            style="float: right"
            class="pointer"
          >
            忘记密码
          </router-link> -->
        </a-form-model-item>
      </a-form-model>
    </div>
    <FooterCopyright class="footer" />
    <Loading v-show="showLoading" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/Loading.vue";
import FooterCopyright from "@/components/FooterCopyright";
export default {
  name: "Login",
  components: { Loading, FooterCopyright },
  data() {
    const validateCode = (rule, value, callback) => {
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
    //使用正则表达式验证手机号
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        //获取工具类中的手机号正则表达式
        const phoneReg =
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        if (phoneReg.test(value)) {
          callback();
        } else {
          //如果验证输入错误就清空
          this.form.phone = "";
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      showLoading: false,
      identifyCode: "",
      codeBtnWord: "获取验证码", // 获取验证码按钮文字
      waitTime: 61, // 获取验证码按钮失效时间
      form: {
        phone: "",
        password: "",
        code: "",
      },
      rules: {
        phone: {
          validator: checkPhone,
          //   required: true,
          //   message: "手机号",
          trigger: "blur",
        },
        password: { required: true, message: "请输入密码", trigger: "blur" },
        code: [
          {
            // validator: validateCode,
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin"]),
    // 用于校验手机号码格式是否正确
    phoneNumberStyle() {
      let reg = /^1[3456789]\d{9}$/;
      if (!reg.test(this.form.phone)) {
        return false;
      }
      return true;
    },
    // 控制获取验证码按钮是否可点击
    getCodeBtnDisable: {
      //设置按钮61s
      get() {
        if (this.waitTime === 61) {
          if (this.form.phone && this.phoneNumberStyle) {
            return false;
          }
          return true;
        }
        return true;
      },
      // 注意：因为计算属性本身没有set方法，不支持在方法中进行修改，而下面我要进行这个操作，所以需要手动添加
      set() {},
    },
  },
  mounted() {},
  methods: {
    ...mapActions(["userInfoSync", "setisLoginSync"]),
    // 获取验证码
    getCode() {
      this.waitTime--;
      this.getCodeBtnDisable = true;
      this.codeBtnWord = `${this.waitTime}s`;
      let timer = setInterval(() => {
        if (this.waitTime > 1) {
          this.waitTime--;
          this.codeBtnWord = `${this.waitTime}s`;
        } else {
          clearInterval(timer);
          this.codeBtnWord = "获取验证码";
          this.getCodeBtnDisable = false;
          this.waitTime = 61;
        }
      }, 1000);
    },
    // 确认
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // 模拟登录
          let { phone, password, code } = this.form;
          if (phone == "17344030576" && code == "123456") {
            this.userInfoSync({ phone, code });
            this.setisLoginSync(true);
            this.$router.push("/home");
          } else {
            this.$message.error("请检查是否填写正确");
          }
        } else {
          this.$message.error("请检查是否填写完整");
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    goPath() {
      this.$router.push("/home");
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ant-form {
    width: 88%;
    .btnCode {
      min-width: 36%;
      margin-left: 4px;
    }
    /* .disabled-style {
      background-color: #eeeeee;
      color: #cccccc;
      margin-left: 16px;
      width: calc(100% - 16px);
      text-align: center;
      padding-left: 0px;
      padding-right: 0px;
      font-size: 12px;
    }
    .code-style {
      margin-left: 16px;
      width: calc(100% - 16px);
      color: #606266;
      text-align: center;
      padding-left: 0px;
      padding-right: 0px;
      font-size: 10px;
    } */
  }

  .footer {
    padding: 30px 0;
  }

  .container {
    width: 550px;
    min-height: 350px;
    border-radius: 5px;
    background: #fff;
    margin: auto;
    padding: 18px 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .title {
      font-size: 35px;
      font-weight: bold;
    }
    .buns {
      height: 45px;
      padding: 0 30px;
      font-size: 20px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    .title {
      font-size: 50px;
      text-align: center;
    }
    .container {
      width: 60%;
    }
  }
  @media screen and (max-width: 769px) {
    .title {
      font-size: 50px;
      text-align: center;
    }
    .container {
      width: 90%;
    }
  }
}
</style>
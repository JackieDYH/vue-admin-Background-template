<!--
 * @Author: Jackie
 * @Date: 2022-05-09 17:16:51
 * @LastEditTime: 2022-05-12 20:02:28
 * @LastEditors: Jackie
 * @Description: 链的方式登录
 * @FilePath: /vue-admin-Background-template/src/views/Login/LoginChain.vue
 * @version: 
-->
<template>
  <div class="Login">
    <div class="container">
      <h1 class="title">MaaS链上资源管理平台</h1>
      <a-button type="primary" class="buns" @click="getWeb">
        Meta Mask登录
      </a-button>
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
    return {
      showLoading: false,
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin"]),
  },
  mounted() {
    // this.init();
  },
  methods: {
    ...mapActions(["userInfoSync", "setisLoginSync"]),
    // =====================测试==========================
    async init() {
      console.log(this.$chain2);
      // let res = await this.$chain.getboxNFTIds();
      let res0 = await this.$chain2.contracts.MaaS_TEST.getboxNFTIds();
      let res = await this.$chain2.auth.getAddress();
      let res2 = await this.$chain.getAddress();
      console.log(res0);
      console.log(res, res2);
    },
    // ===============================================
    // 连接
    async getWeb() {
      try {
        this.showLoading = true;
        let adderss = await this.$chain.getAddress();
        console.log(adderss);
        if (adderss) {
          this.userInfoSync({ adderss });
          this.setisLoginSync(true);
          this.$message.success("连接成功");
          this.goPath();
        }
      } catch (error) {
        const provider = window.ethereum;
        if (typeof provider == "undefined") {
          console.log("Please install MetaMask");
          this.$message.warning("请安装MetaMask!!!");
        } else {
          this.$message.warning("连接失败！");
        }
        console.log(error);
      } finally {
        this.showLoading = false;
      }
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
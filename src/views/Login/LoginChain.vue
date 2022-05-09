<!--
 * @Author: Jackie
 * @Date: 2022-05-09 17:16:51
 * @LastEditTime: 2022-05-09 17:50:57
 * @LastEditors: Jackie
 * @Description: 链的方式登录
 * @FilePath: /vue-admin-Background-template/src/views/Login/LoginChain.vue
 * @version: 
-->
<template>
  <div class="Login">
    <div class="container">
      <h1 class="title">MaaS链上资源管理平台</h1>
      <a-button type="primary" class="buns" @click="goPath">
        Meta Mask登录
      </a-button>
    </div>
    <FooterCopyright />
  </div>
</template>

<script>
import FooterCopyright from "@/components/FooterCopyright";
export default {
  name: "Login",
  components: { FooterCopyright },
  data() {
    return {};
  },
  mounted() {},
  methods: {
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
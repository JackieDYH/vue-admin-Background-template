<!--
 * @Author: Jackie
 * @Date: 2022-05-09 17:54:58
 * @LastEditTime: 2022-05-09 18:24:45
 * @LastEditors: Jackie
 * @Description: 404页面
 * @FilePath: /vue-admin-Background-template/src/views/404.vue
 * @version: 
-->
<template>
  <div class="NotFound">
    <div class="wrap">
      <h1 class="title">404</h1>
      <h2 class="subtitle">抱歉，您访问的页面不存在</h2>
      <!-- <router-link to="/login">返回</router-link> -->
      <a-button type="primary" class="buns" @click="goPath"> 返回 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goPath() {
      this.$router.push("/");
      // this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.NotFound {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/bg_repeat_white.png");
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wrap {
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
      font-size: 30px;
      font-weight: bold;
    }
    .buns {
      height: 45px;
      padding: 0 30px;
      font-size: 20px;
    }
  }
}
</style>
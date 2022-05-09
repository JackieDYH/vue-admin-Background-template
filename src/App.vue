<!--
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2022-05-09 13:50:32
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>
<style lang="scss">
</style>

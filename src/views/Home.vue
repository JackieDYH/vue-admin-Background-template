<!--
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2021-10-25 15:48:25
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

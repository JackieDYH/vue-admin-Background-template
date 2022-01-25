<!--
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2022-01-25 16:21:45
 * @LastEditors: Jackie
 * @Description: 后台管理-主页
 * @version: 
-->
<template>
  <div class="home">
    <span>主页-{{ $t("Common.test") }}</span>
    <span>{{ $t("Common.ok") }}</span>
    <el-select
      style="width: 20%"
      v-model="defaultUrl"
      placeholder="请选择"
      @change="setServer"
    >
      <el-option
        v-for="item in serverList"
        :key="item.server"
        :label="item.name"
        :value="item.server"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tipsmixin from "@/common/mixins/tipsmixin";
export default {
  name: "Home",
  mixins: [tipsmixin],
  components: {},
  data() {
    return { defaultUrl: "" };
  },
  computed: {
    ...mapGetters(["defaultServer", "serverList"]),
  },
  mounted() {
    this.defaultUrl = this.defaultServer;
  },
  methods: {
    ...mapActions(["defaultServerSync"]),
    setServer(value) {
      console.log("defaultUrl:", value);
      this.defaultServerSync(value);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
}
</style>

/*
 * @Author: Jackie
 * @Date: 2021-08-02 17:16:18
 * @LastEditTime: 2021-10-25 15:07:10
 * @LastEditors: Jackie
 * @Description: 公共提示等功能 mixin
 * @version: 
 */
// import { Toast } from "vant";
import { $t } from "@/common/lang/i18n";
// import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {

    };
  },
  computed: {
    // ...mapGetters(["isLogin"]),
  },
  mounted() {
    // window.addEventListener("scroll", this.scrollEvent, false);
    // Toast($t("Common.test"))
  },
  destroyed() {
    // window.removeEventListener("scroll", this.scrollEvent, false);
  },
  methods: {
    // ...mapActions(["setisLoginaSync"]),
    // toast(message) {
    //   Toast({ message, duration: 2000 });
    // },
    // 持续加载中提示
    // loading() {
    //   Toast.loading({
    //     message: "Loading...",
    //     // forbidClick: true,
    //     duration: 0,
    //     overlay: true,
    //   });
    // },
    // 关闭提示
    // loadingclear() {
    //   setTimeout(() => {
    //     Toast.clear();
    //   }, 1000);
    // },
    onBottom() { },
    // 剪贴板
    /**使用剪贴板
     * v-clipboard:copy="66666"
     * v-clipboard:success="copyAddress"
     * v-clipboard:error="copyAddressError"
     * */
    copyAddress() {
      Toast({ message: this.$t("Common.common.success"), duration: 2000 });
      // Toast.success("ok");
    },
    copyAddressError() {
      Toast("error");
    },
  },
};

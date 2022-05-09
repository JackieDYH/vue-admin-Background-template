/*
 * @Author: Jackie
 * @Date: 2021-08-02 17:16:18
 * @LastEditTime: 2022-01-24 19:05:27
 * @LastEditors: Jackie
 * @Description: 公共提示等功能 mixin
 * @version: 
 */
import { Toast } from "vant";
import { $t } from "@/common/lang/i18n";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters("leCube", ["userInfo", "isLogin"]),
  },
  mounted() {
    // window.addEventListener("scroll", this.scrollEvent, false);
    // Toast($t("Common.test"))
  },
  destroyed() {
    // window.removeEventListener("scroll", this.scrollEvent, false);
  },
  methods: {
    ...mapActions("leCube", ["userInfoSync", "isLoginSync"]),
    toast(message) {
      Toast({ message, duration: 2000 });
    },
    // 持续加载中提示
    loading() {
      Toast.loading({
        message: "Loading...",
        // forbidClick: true,
        duration: 0,
        overlay: true,
      });
    },
    // 关闭提示
    loadingclear() {
      setTimeout(() => {
        Toast.clear();
      }, 1000);
    },
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
    // =======================登录or退出=========================
    async login(username, password) {
      try {
        this.loading();
        this.isLoginSync(true);
        this.userInfoSync({ name: 'admin', token: 'exgsa123456' });
        localStorage.setItem("token", 'exgsa123456');
        this.$router.push({ path: "/" });
        // let res = await this.$axios.login({ username, password });
        // console.log("login:", res);
        // if (res.errorCode == 0) {
        //   this.isLoginSync(true);
        //   this.userInfoSync({ address: username, token: res.data.token });
        //   localStorage.setItem("token", res.data.token);
        //   this.$router.push({ path: "/" });
        // } else {
        //   this.pwdError = res.msg;
        // }
      } catch (error) {
        this.toast("登录失败");
        console.log("登录错误", error);
      } finally {
        this.loadingclear();
      }
    },

    async outLogin() {
      try {
        this.loading();
        this.isLoginSync(false);
        this.userInfoSync({ name: '', token: '' });
        localStorage.removeItem("token");
        this.$router.push({ path: '/login' });
        this.toast("退出成功")
      } catch (error) {
      } finally {
        this.loadingclear();
      }
    },
    // =======================end=========================
  },
};

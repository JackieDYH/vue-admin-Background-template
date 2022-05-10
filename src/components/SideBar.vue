<!--
 * @Author: Jackie
 * @Date: 2022-05-07 14:42:39
 * @LastEditTime: 2022-05-10 18:05:37
 * @LastEditors: Jackie
 * @Description: sider
 * @FilePath: /vue-admin-Background-template/src/components/SideBar.vue
 * @version: 
-->
<template>
  <a-layout-sider class="sider" width="200" style="background: #fff">
    <!-- <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="collapsed = !collapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    <a-menu
      mode="inline"
      :default-selected-keys="[$route.path]"
      :selectedKeys="[$route.path]"
      :default-open-keys="[$route.meta.keys]"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <!-- 
        theme="dark"
        :openKeys="openKeys"
        @click="menuClick"
        @select="menuSelect"
        @openChange="openChange"
        :inlineCollapsed="collapsed" 
      -->
      <template v-for="item in $router.options.routes">
        <template v-if="!item.meta.hidden && item.children">
          <!-- 只有一个子菜单: 一级菜单 -->
          <!-- <template v-if="item.children.length === 1"> -->
          <template v-if="item.meta.leaf">
            <a-menu-item :key="item.children[0].path">
              <a-icon :type="item.meta && item.meta.icon" />
              <router-link
                style="display: inline-block"
                :to="item.children[0].path"
              >
                {{ item.children[0].meta.title }}
              </router-link>
            </a-menu-item>
          </template>

          <!-- 有子菜单 一二级菜单 -->
          <template v-else>
            <a-sub-menu :key="item.meta.keys">
              <span slot="title">
                <a-icon :type="item.meta && item.meta.icon" />
                <span v-if="item.meta">{{ item.meta.title }}</span>
              </span>
              <template v-for="subItem in item.children">
                <a-menu-item v-if="!subItem.meta.hidden" :key="subItem.path">
                  <a-icon
                    v-if="subItem.meta.icon"
                    :type="subItem.meta && subItem.meta.icon"
                  />
                  <router-link style="display: inline-block" :to="subItem.path">
                    {{ subItem.meta.title }}
                  </router-link>
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </template>
      </template>

      <!-- 另一种写法 -->
      <!-- <template v-for="item in $router.options.routes">
        <template v-if="!item.meta.hidden">
          <a-sub-menu :key="item.meta.keys" v-if="!item.leaf">
            <span slot="title">
              <a-icon :type="item.meta.icon" />
              {{ item.meta.title }}
            </span>
            <template v-for="child in item.children">
              <a-menu-item v-if="!child.meta.hidden" :key="child.path">
                <router-link :to="child.path">
                  {{ child.meta.title }}
                </router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
          <a-menu-item
            :key="item.meta.keys"
            v-if="item.leaf && item.children.length > 0"
          >
            <router-link style="display: inline-block" :to="item.path">
              <span slot="title">
                <a-icon :type="item.meta.icon" />
                {{ item.meta.title }}
              </span>
            </router-link>
          </a-menu-item>
        </template>
      </template> -->
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      collapsed: false,
      openKeys: [],
      rootSubmenuKeys: [],
    };
  },
  created() {
    // console.log(this.$router.options.routes);
    // 只展开一个一级菜单
    // this.rootSubmenuKeys = this.$router.options.routes.map(
    //   (item) => item.meta.keys
    // );
    // const openKeys = window.sessionStorage.getItem("openKeys");
    // console.log(openKeys);
    // if (openKeys) {
    //   this.openKeys = JSON.parse(openKeys);
    // } else {
    //   this.openKeys = ["index"];
    // }
  },
  methods: {
    // 展开/关闭
    openChange(openKeys) {
      // 只展开一个子菜单
      console.log(openKeys);
      if (openKeys.length === 0) {
        window.sessionStorage.setItem(
          "openKeys",
          JSON.stringify(this.openKeys)
        );
        // window.sessionStorage.removeItem("openKeys");
        return false;
      }

      // 将当前打开的父级菜单存入缓存中
      window.sessionStorage.setItem(
        "openKeys",
        JSON.stringify([openKeys[1]] || [openKeys[0]])
      );
      //  控制只打开一个
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    // 点击菜单
    menuClick({ item, key, keyPath }) {
      // console.log({ item, key, keyPath });
    },
    // 被选中
    menuSelect({ item, key, selectedKeys }) {
      // console.log({ item, key, selectedKeys });
    },
    //路由内容切换
    changeMenu(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss" scoped>
.sider {
  ::v-deep.ant-layout-sider-children {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
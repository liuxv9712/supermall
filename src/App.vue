<template>
  <div id="app">
    <router-view></router-view>
    <main-tab></main-tab>
  </div>
</template>

<script>
// 导入组件
import MainTab from "components/content/mainTabBar/MainTab";

export default {
  name: "App",
  components: {
    MainTab
  }
};
</script>

<style>
/* 在style中引用，要用@import ;*/
@import "./assets/css/base.css";
</style>

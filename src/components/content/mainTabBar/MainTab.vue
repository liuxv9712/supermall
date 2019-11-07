<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/homeActive.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/classify.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/classifyActive.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/shopcar.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcarActive.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/me.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/meActive.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";


export default {
	name: "MainTab",
	components:{
		TabBar,
    TabBarItem,
	}
};
</script>

<style>
</style>
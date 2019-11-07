<template>
  <!-- 所有的item都展示一个图片，一个文字 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  /* Flex弹性布局，用来为盒状模型提供最大的灵活性 */
  /* flex:1均等分  49px是常识，开发一般高度 */
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}

.active {
  color: red;
}
</style>
<template>
  <div class="header-one">
    <i class="iconfont icon-arrowLeft" @click="handleClick()"></i>
    <div class="header-title">标题</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "HeaderOne",
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.commit("setSidebarShow", true);
    };
    return {
      handleClick
    };
  }
};
</script>

<style lang="less">
.header-one {
  width: 750px;
  height: 90px;
  background-color: @main-color;
  position: relative;
  flex-shrink: 0;

  .icon-arrowLeft {
    padding: 20px 20px;
    font-size: 50px;
    color: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
  }

  .header-title {
    font-size: 35px;
    line-height: 90px;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
}
</style>

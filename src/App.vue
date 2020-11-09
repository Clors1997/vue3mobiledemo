<template>
  <div id="app">
    <div class="bax"></div>
    <div class="bax"></div>
    <div class="bax"></div>
    <div class="bax"></div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
      渐变色按钮
    </van-button>
    <i class="iconfont iconsanjiaoxing2"></i>
  </div>
  <router-view />
  <footer />
</template>

<style lang="less">
.bax {
  width: 100px;
  height: 100px;
  background-color: @border-color;
}
footer {
  width: 100%;
  height: 60px;
  padding-bottom: env(safe-area-inset-bottom);

  position: fixed;
  bottom: 0;
  background-color: #e90a0a;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>

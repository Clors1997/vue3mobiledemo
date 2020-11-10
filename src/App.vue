<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { nextTick, ref, onMounted } from "vue";

export default {
  setup() {
    const left = ref("0px");
    onMounted(async () => {
      await nextTick();
      setTimeout(() => {
        left.value = "200px";
      }, 1000);
    });

    return {
      left
    };
  }
};
</script>

<style lang="less">
#app {
  height: 100vh;
  overflow: hidden;
  background-color: #278ff6;
}
</style>

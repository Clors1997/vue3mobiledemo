<template>
  <div
    class="sidebar-one"
    :class="sidebarShowFlag ? 'sidebar-one-show' : ''"
    @click="handleClick()"
  >
    关闭
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, watch, ref } from "vue";
export default {
  name: "SidebarOne",
  setup() {
    const store = useStore();
    const sidebarShow = computed(() => store.state.sidebarShow);
    const sidebarShowFlag = ref(false);
    const handleClick = () => {
      store.commit("setSidebarShow", false);
    };

    watch(sidebarShow, state => {
      console.log(state);
      if (state) {
        setTimeout(() => {
          sidebarShowFlag.value = true;
        }, 100);
      } else {
        sidebarShowFlag.value = false;
      }
    });

    return {
      sidebarShow,
      sidebarShowFlag,
      handleClick
    };
  }
};
</script>

<style lang="less">
.sidebar-one {
  position: absolute;
  top: 0;
  border: 1px solid #fff;
  width: 500px;
  height: 100%;
  transition: all 0.9s ease-in-out;
  transform: perspective(370px) rotateY(0deg) translateX(-750px) scale(1);
  -webkit-transform: perspective(370px) rotateY(0deg) translateX(-750px)
    scale(1);
}

.sidebar-one-show {
  transform: perspective(370px) rotateY(5deg) translateX(-30px) scale(0.74);
  -webkit-transform: perspective(370px) rotateY(5deg) translateX(-30px)
    scale(0.74);
}
</style>

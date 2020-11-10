<template>
  <div class="layout-simple" :class="sidebarShow ? 'layout-simple-show' : ''">
    <header-one></header-one>
    <router-view></router-view>
  </div>
  <sidebar-one></sidebar-one>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import HeaderOne from "@/components/header/HeaderOne";
import SidebarOne from "@/components/sidebar/SidebarOne";
export default {
  components: {
    [HeaderOne.name]: HeaderOne,
    [SidebarOne.name]: SidebarOne
  },
  setup() {
    const store = useStore();
    const sidebarShow = computed(() => store.state.sidebarShow);

    return {
      sidebarShow
    };
  }
};
</script>

<style>
.layout-simple {
  display: flex;
  flex-direction: column;
  height: 100%;
  clear: both;
  transition: all 1s ease-in-out;
  transform: perspective(370px) rotateY(0deg) translateX(0px) scale(1);
  -webkit-transform: perspective(370px) rotateY(0deg) translateX(0px) scale(1);
}
.layout-simple-show {
  transform: perspective(370px) rotateY(-10deg) translateX(300px) scale(0.7);
  -webkit-transform: perspective(370px) rotateY(-10deg) translateX(300px)
    scale(0.7);
}
</style>

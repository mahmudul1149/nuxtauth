<template>
  <div>
    <AppHeaderVue />
    <!-- <transition name="slide" mode="out-in">
    </transition> -->
    <Nuxt />
  </div>
</template>

<script>
import AppHeaderVue from "../components/views/AppHeader.vue";

export default {
  components: {
    AppHeaderVue,
  },
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
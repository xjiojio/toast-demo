<template>
  <div @click="$router.push('/')">Home</div>
  <div @click="$router.push('/about')">About</div>

  <router-view v-slot="{ Component, route }" style="position: fixed">
    <transition :name="transitionName">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

let transitionName = ref('slide-left');

const route = useRoute();
const router = useRouter();
// console.log('route', route);
// console.log('router', router);

watch(
  () => route,
  (to, from) => {
    console.log({ to, from });
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    transitionName = ref(toDepth < fromDepth ? 'slide-right' : 'slide-left');
  },
);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.child-view {
  position: absolute;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.slide-left-enter-active {
  animation-name: slide-left-in;
  animation-duration: 0.3s;
}

.slide-left-leave-active {
  animation-name: slide-left-out;
  animation-duration: 0.3s;
}

.slide-right-enter-active {
  animation-name: slide-right-in;
  animation-duration: 0.3s;
}

.slide-right-leave-active {
  animation-name: slide-right-out;
  animation-duration: 0.3s;
}

@keyframes slide-left-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-left-out {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slide-right-in {
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-right-out {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}

// .slide-enter-active {
//   transition: all 0.3s ease-out;
// }

// .slide-enter-active {
//   transition: all 0.3s ease-out;
// }

// .slide-leave-active {
//   // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .slide-enter-from,
// .slide-leave-to {
//   transform: translateX(100%);
//   opacity: 0;
// }
</style>

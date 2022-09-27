<template>
  <div class="home">
    <!-- <img src="@assets/logo.png" alt="" style="width:100px;height:100px;"> -->
    <!-- <div class="logo"></div> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript + Vite App" />
    <nut-button type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
</script>

<style lang="scss" scoped></style>

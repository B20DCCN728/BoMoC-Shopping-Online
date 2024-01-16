<template>
  <Header />
  <a-layout style="min-height: 100vh">
    <Sidebar :selected-keys="selectedKeys"/>
    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <!-- Nguyen Hoang Viet is B20DCCN728 - PTIT -->
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        BoMoC ©2023 Created by B20DCCN728 - PTIT
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
  import { ref } from 'vue';
  import  Sidebar  from '../../components/admin/Sidebar.vue';
  import Header from '../../components/admin/Header.vue';

  const selectedKeys = ref(['1']);  

</script>

<style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
</style>
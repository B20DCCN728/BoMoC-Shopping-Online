<template>
    <Sidebar :collapsed="collapsed" :selected-keys="selectedKeys"/>
    <a-layout style="min-height: 100vh">
      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            Bill is a cat.
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>
  <script setup>
  import { ref } from 'vue';
  import  Sidebar  from '../../components/admin/Sidebar.vue';

  const collapsed = ref(false);
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
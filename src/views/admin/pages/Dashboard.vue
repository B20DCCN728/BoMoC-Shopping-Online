<template>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>

      </a-menu>
    </a-layout-header>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            Мы знаем, что попадем в ад.
            Но в ад думы будем лучше.
            Лучше в адду.
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          BoMoC ©2023 Created by PMC Wagner
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script setup>
  import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
  import { ref } from 'vue';
  const collapsed = ref(false);
  const selectedKeys = ref(['1']);
  </script>
  <style scoped>
  #components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
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
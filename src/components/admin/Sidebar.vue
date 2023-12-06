<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  collapsed: Boolean,
  selectedKeys: Array
});

</script>

<template>
    <a-layout-sider :collapsed="collapsed" collapsible>
        <div class="logo"></div>
        <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Dashboard</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Cá nhân</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>Khách hàng</span>
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
                <span>Sản phẩm</span>
              </span>
            </template>
            <a-menu-item key="6">Quản lí</a-menu-item>
            <a-menu-item key="8">Tạo bài đăng</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
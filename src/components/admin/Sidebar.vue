<script setup>
import {
PieChartOutlined,
DesktopOutlined,
UserOutlined,
TeamOutlined,
FileOutlined,
} from '@ant-design/icons-vue';
import { ref, defineProps } from 'vue';

const props = defineProps({
  selectedKeys: Array,
});

const collapsed = ref(false);

</script>

<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <a-menu :selected-keys="selectedKeys" theme="dark" mode="inline">
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
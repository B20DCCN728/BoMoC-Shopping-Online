<script setup>
import {
PieChartOutlined,
DesktopOutlined,
UserOutlined,
TeamOutlined,
FileOutlined,
MenuOutlined,
FileDoneOutlined,
SettingOutlined,
FormOutlined,
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
            <span>Tài khoản</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>Khách hàng</span>
              </span>
            </template>
            <a-menu-item key="3">Danh sách</a-menu-item>
            <a-menu-item key="4">Danh sách đen</a-menu-item>
            <a-menu-item key="5">Cài đặt</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Pages</span>
              </span>
            </template>
            <a-menu-item key="6">404 - Not Found</a-menu-item>
            <a-menu-item key="8">Coupons</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <menu-outlined />
                <span>Catalog</span>
              </span>
            </template>
            <a-menu-item key="9">Sản phẩm</a-menu-item>
            <a-menu-item key="10">Categories</a-menu-item>
            <a-menu-item key="11">Phiếu giảm giá</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="12">
            <form-outlined />
            <span>Bài đăng</span>
          </a-menu-item>  
          <a-menu-item key="13">
            <file-done-outlined />
            <span>Orders</span>
          </a-menu-item>
          <a-menu-item key="14">
            <setting-outlined />
            <span>Setting</span>
          </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
// Created by B20DCCN728

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "admin",
        component: () => import("../views/admin/Admin.vue"),
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("../views/admin/pages/Dashboard.vue"),
            },
            {
                path: "creator",
                name: "creator",
                component: () => import("../views/admin/pages/Creator.vue"),
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found", 
        component: () => import("../views/NotFound.vue"),
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/customer/Home.vue"),
    },
    {
        path: "/product-detail/:id",
        name: "ProductDetail",
        component: () => import("../views/customer/ProductDetail.vue"),
    }
];

const router = createRouter({   
    history: createWebHistory(),
    routes,
});

export default router;


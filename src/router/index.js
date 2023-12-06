// Created by B20DCCN728

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Admin",
        component: () => import("../views/admin/Admin.vue"),
    },
    {
        path: "/ok",
        name: "Not Found", 
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({   
    history: createWebHistory(),
    routes,
});

export default router;

// children: [
//     {
//         path: "dashboard",
//         name: "dashboard",
//         component: () => import("../views/admin/pages/Dashboard.vue"),
//     }            
// ],

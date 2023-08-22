import Vue from "vue";
import Router from "vue-router";

// import ViewMain from "../view/ViewMain.vue";

Vue.use(Router);

// 创建routes配置
const routes = [
    // 根路由
    {
        path: "/",
        redirect: "/login",
        component: () => import("../view/ViewLoginThree.vue"),
    },
    // 登录
    {
        path: "/login",
        name: "login",
        component: () => import("../view/ViewLoginThree.vue"),
    },
    // 主页
    {
        path: "/home",
        name: "main",
        // component: ViewMain
        // 推荐的路由懒加载
        component: () => import("../view/ViewMain.vue"),
        // 异步组件和懒加载是同一个东西
        // component: (resolve) => require(["../view/ViewMain.vue"], resolve),
    },
    // 404
    {
        path: "*",
        name: "NotFound",
        component: () => import("../view/ViewNotFound.vue"),
    },
];

// 创建router实例
const router = new Router({
    mode: "history",
    routes,
});

// 导出router实例
export default router;

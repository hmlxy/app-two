import Vue from "vue";
import Router from "vue-router";
import { getToken } from "../utils/token.js";
// import ViewMain from "../view/ViewMain.vue";

Vue.use(Router);

// 创建routes配置
const routes = [
    // 根路由
    {
        path: "/",
        name: "首页",
        redirect: "/login",
        hidden: true,
        component: () => import("../view/login/ViewLogin.vue"),
    },
    // 登录
    {
        path: "/login",
        name: "login",
        hidden: true,
        component: () => import("../view/login/ViewLogin.vue"),
    },
    // 404
    {
        path: "*",
        name: "NotFound",
        hidden: true,
        component: () => import("../view/errorview/ViewNotFound.vue"),
    },
    // 学生
    {
        path: "/home",
        name: "学生管理",
        iconClass: "fa fa-users",
        redirect: "/home/student",
        component: () => import("../view/ViewMain.vue"),
        children: [
            {
                path: "/home/student",
                name: "学生列表",
                iconClass: "fa fa-list",
                component: () => import("@/view/student/StudentList.vue"),
            },
            {
                path: "/home/info",
                name: "信息列表",
                iconClass: "fa fa-list-alt",
                component: () => import("@/view/student/InfoList.vue"),
            },
            {
                path: "/home/infos",
                name: "信息管理",
                iconClass: "fa fa-list-alt",
                component: () => import("@/view/student/infoManage.vue"),
            },
            {
                path: "/home/work",
                name: "作业列表",
                iconClass: "fa fa-list-ul",
                component: () => import("@/view/student/WorkList.vue"),
            },
            {
                path: "/home/works",
                name: "作业管理",
                iconClass: "fa fa-th-list",
                component: () => import("@/view/student/WorkMend.vue"),
            },
        ],
    },
    // 数据
    {
        path: "/home",
        name: "数据分析",
        iconClass: "fa fa-bar-chart",

        component: () => import("../view/ViewMain.vue"),
        children: [
            {
                path: "/home/dataview",
                name: "数据概览",
                iconClass: "fa fa-line-chart",
                component: () => import("@/view/datamap/DataView.vue"),
            },
            {
                path: "/home/mapview",
                name: "地图概览",
                iconClass: "fa fa-line-chart",
                component: () => import("@/view/datamap/MapView.vue"),
            },
            {
                path: "/home/travel",
                name: "旅游地图",
                iconClass: "fa fa-line-chart",
                component: () => import("@/view/datamap/TravelMap.vue"),
            },
            {
                path: "/home/score",
                name: "分数地图",
                iconClass: "fa fa-line-chart",
                component: () => import("@/view/datamap/ScoreMap.vue"),
            },
        ],
    },
    // 用户中心
    {
        path: "/home",
        name: "用户中心",
        iconClass: "fa fa-user",

        component: () => import("@/view/ViewMain.vue"),
        children: [
            {
                path: "/home/user",
                name: "权限管理",
                iconClass: "fa fa-line-chart",
                component: () => import("@/view/users/ViewUser.vue"),
            },
        ],
    },
];

// 创建router实例
const router = new Router({
    mode: "history",
    routes,
});

// 添加全局前置导航守卫
// 也就是根据是否登录限制路由跳转
router.beforeEach((to, from, next) => {
    // 判断token的存在
    const token = getToken("token");
    if (!token && to.name !== "login") {
        // 说明当前用户没有登录，并且不在登录页面
        // 那么自动跳转登录页面
        next({ name: "login" });
    } else if (token && to.name === "login") {
        // token存在说明用户已经登录,如果去到login页面
        // 那么自动跳转首页
        next({ name: "学生列表" });
    } else {
        // 根据路由自动跳转
        next();
    }
});

// 导出router实例
export default router;

import Vue from "vue";
import App from "./App.vue";

// 导入elment文件
import "@/plugins/element";

// 导入font-awesome
import "font-awesome/css/font-awesome.min.css";

// 导入mock拦截器
import "./api/mock";

// 导入axios
// 将 axios 实例绑定到 Vue 原型上,可以全局使用
// import axios from "axios";
// Vue.prototype.$axios = axios;

import http from "./utils/request.js";
Vue.prototype.$http = http; //这样声明后可以使用this.http访问axios封装实例
// 引入router
import router from "./router";

// 引入echarts实例
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 关闭生产环境提示
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");

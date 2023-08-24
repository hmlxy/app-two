import Vue from "vue";
import App from "./App.vue";

// 导入elment文件
import "@/plugins/element";

// 导入font-awesome
import "font-awesome/css/font-awesome.min.css";

// 导入axios
// import axios from "axios";
// 将 axios 实例绑定到 Vue 原型上,可以全局使用
// Vue.prototype.axios = axios;

import http from "./utils/request.js";
Vue.prototype.http = http; //这样声明后可以使用this.http访问axios封装实例
// 引入router
import router from "./router";

// 导入mock拦截器
import "./api/mock";

Vue.config.productionTip = false;
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");

import axios from "axios";
import { Message } from "element-ui";
import { getToken } from "./token.js";

// 创建axios实例http
const http = axios.create({
    baseURL: "/api",
    timeout: 3000,
});

// 添加请求拦截器
http.interceptors.request.use(
    (config) => {
        // 请求前获取token
        config.headers["token"] = getToken("token");
        return config;
    },
    (error) => {
        // 返回一个包含错误的promise对象
        return Promise.reject(error);
    }
);

// 添加响应拦截器
http.interceptors.response.use(
    (response) => {
        // 对响应数据进行解析
        let { status, message } = response.data;

        // 对响应进行弹窗
        // if (status === 200) {
        //     Message({ message: message || "error", type: "warning" });
        // }

        return response;
    },
    (error) => {
        // 返回一个包含错误的promise对象
        return Promise.reject(error);
    }
);

export default http;

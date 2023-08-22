import http from "../utils/request.js";

// 登录
export const Login = (data) => {
    return http.post("/login/getLogin", data);
};

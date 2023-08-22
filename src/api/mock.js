import Mock from "mockjs";

import loginApi from "./mcokData/login";
import login from "./mcokData/login";

// 记得去main.js导入才能使用

// 登录拦截
Mock.mock(/api\/login\/getLogin/, "post", loginApi.getLogin);

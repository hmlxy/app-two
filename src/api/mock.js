import Mock from "mockjs";
// 记得去main.js导入才能使用
import login from "./mcokData/login";
import student from "./mcokData/student";

// 登录拦截
Mock.mock(/api\/login/, "post", login.getLogin);

// 学生数据拦截
Mock.mock(/api\/student/, "get", student.getStudentData);

// 学生数据删除拦截
Mock.mock(/^\/api\/student/, "delete", student.deleteStudentData);

// 学生搜索拦截
Mock.mock(/^\/api\/info/, "get", student.seachrStudent);

// 新增用户
Mock.mock(/^\/api\/student/, "post", student.createStudent);
// 编辑用户
Mock.mock(/^\/api\/student/, "put", student.updateStudent);

// 作业数据拦截
Mock.mock(/^\/api\/works/, "get", student.getWorkData);

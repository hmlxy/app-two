import http from "../utils/request.js";

// 登录
export const Login = (data) => {
    return http.post("/login", data);
};

// 获取学生数据
export const getStudentData = (params) => {
    return http.get("/student/getStudentData", params);
};

// 学生数据删除
export const deleteStudentData = (id) => {
    return http.delete(`student/deleteStudentData/${id}`);
};

// 搜索学生
export const seachrStudent = (params) => {
    return http.get(`student/seachrStudent/${params}`);
};

// post新增用户
export const createStudent = (data) => {
    return http.post("student/createStudent", data);
};
// post编辑用户
export const updateStudent = (data) => {
    return http.post("student/updateStudent", data);
};

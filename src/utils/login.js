import { getToken, setToken } from "./token.js";

// 登录
export function postLogin(root, url, data) {
    root.$refs["form"].validate((valid) => {
        // 校验通过
        if (valid) {
            // 发送给后端
            root.http
                .post(url, root.form)
                .then((res) => {
                    // 发送成功
                    if (res.status === 200) {
                        // 储存之后使用
                        setToken("username", res.data.data.username);
                        setToken("token", res.data.data.token);

                        // 成功提示
                        root.$message({
                            message: res.data.data.message,
                            type: "success",
                        });
                        // 路由跳转
                        root.$router.push("/home");
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        // 验证没有通过
        else {
            console.error(root.form);
        }
    });
}

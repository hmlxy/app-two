<template>
    <div class="login">
        <el-card shadow="always">
            <h3>后台管理系统</h3>

            <!-- 键盘触发事件要使用native绑定form上 -->
            <el-form
                hide-required-asterisk
                :rules="rules"
                :inline="false"
                ref="form"
                label-width="100px"
                :model="form"
                @keydown.enter.native="onLogin"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="请入用户名" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        placeholder="请输入密码"
                        type="password"
                        show-password
                        v-model="form.password"
                    ></el-input>
                </el-form-item>
                <el-button type="primary" @click="onLogin">登录</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule, passswordRule } from "../utils/validate.js";
import { getToken, setToken } from "../utils/token.js";
import { Login } from "../api";
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            rules: {
                username: [{ validator: nameRule, trigger: blur }],
                password: [{ validator: passswordRule, trigger: blur }],
            },
        };
    },
    methods: {
        onLogin(form) {
            this.$refs["form"].validate((valid) => {
                // 校验通过
                if (valid) {
                    console.log(this.form);
                    // 发送给后端
                    Login(this.form)
                        .then((res) => {
                            console.log(res, "res");

                            // 发送成功
                            if (res.status === 200) {
                                // 储存之后使用
                                setToken("username", res.data.data.username);
                                setToken("token", res.data.data.token);

                                // 成功提示
                                this.$message({
                                    message: res.data.data.message,
                                    type: "success",
                                });
                                // 路由跳转
                                // this.$router.push("/home");
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                }
                // 验证没有通过
                else {
                    console.error(this.form);
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.login {
    height: 100vh;
    position: relative;
    background: url("../assets/images/a.jpg") center no-repeat;
    background-size: cover;
}

.el-card {
    height: 400px;
    width: 500px;
    position: absolute;
    top: 20%;
    left: 35%;
    border-radius: 50%;
    border-color: #cfcece02;
    background-color: #cfcece02;

    h3 {
        font-size: 30px;
        color: #fff;
    }
    border-radius: 5%;
    /deep/ .el-form-item {
        .el-form-item__label {
            font-size: 20px;
            color: #fff;
        }
    }

    .el-button {
        margin: 40px 0;
        width: 80%;
        font-size: 20px;
    }
}
</style>

<template>
    <div class="login">
        <el-card shadow="always">
            <div slot="header" class="clearfix">
                <h3>后台管理系统</h3>
            </div>
            <el-form
                hide-required-asterisk
                :rules="rules"
                :inline="false"
                ref="form"
                label-width="100px"
                :model="form"
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
export default {
    data() {
        const validateName = (rule, value, callback) => {
            // 请输入4-10位字符
            let reg = /^[A-Za-z]{4,10}$/;
            if (value === "") {
                // Error方法显示提示
                callback(new Error("请输入用户名"));
            } else if (!reg.test(value)) {
                callback(new Error("请输入4-10用户名"));
            } else {
                callback();
            }
        };

        const validatePassword = (rule, value, callback) => {
            // 请输入6-12位字符
            let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,12}$/;
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (!reg.test(value)) {
                callback(new Error("请输入6-12位包含大小写字母数字特殊字符的"));
            } else {
                callback();
            }
        };

        return {
            form: {
                username: "",
                password: "",
            },
            rules: {
                username: [{ validator: validateName, trigger: blur }],
                password: [{ validator: validatePassword, trigger: blur }],
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
                    this.$axios
                        .post("/user", this.form)

                        .then((res) => {
                            console.log(res);
                            // 发送成功
                            if (res.data.status === 200) {
                                // 储存之后使用
                                localStorage.setItem("username", res.data.username);
                                // 成功提示
                                this.$message({
                                    message: res.data.message,
                                    type: "success",
                                });
                                // 路由跳转
                                this.$router.push("/home");
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                } else {
                    console.error(this.form);
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.login {
    margin: 100px auto;
    height: 100%;
    width: 30%;
    border-radius: 50%;
    .el-card {
        h3 {
            font-size: 30px;
        }
        border-radius: 5%;
        /deep/ .el-form-item {
            .el-form-item__label {
                font-size: 20px;
            }
        }

        .el-button {
            margin: 20px 0;
            width: 80%;
            font-size: 20px;
        }
    }
}
</style>

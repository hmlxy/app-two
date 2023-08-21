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
        return {
            form: {
                username: "",
                password: "",
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名称",
                        trigger: "blur",
                    },
                    {
                        min: 4,
                        max: 10,
                        message: "长度在4到10位字符之间",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入用户密码",
                        trigger: "blur",
                    },
                    {
                        min: 6,
                        max: 12,
                        message: "长度在6到12位字符之间",
                        trigger: "blur",
                    },
                ],
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
                        .post("https://rapserver.sunmi.com/app/mock/340/lohin", this.form)

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

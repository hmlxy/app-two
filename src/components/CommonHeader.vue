<template>
    <el-header height="80px">
        <div class="header">
            <div class="left-content">
                <el-button
                    type="primary"
                    size="default"
                    @click="closeMenu"
                    icon="el-icon-menu"
                ></el-button>
                <div class="bread">
                    <CommonBreadCrumb></CommonBreadCrumb>
                </div>
            </div>
            <div class="right-content">
                <el-dropdown trigger="click" placement="bottom" @command="handleClick">
                    <span class="el-dropdown-link">
                        <!-- 这里的图像应该也要储存在localStoreged，根据用户动态加载 -->
                        <img class="head-img" src="../assets/images/avatar.jpg" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>{{ name }}</el-dropdown-item>
                        <el-dropdown-item command="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </el-header>
</template>

<script>
import { getToken } from "../utils/token.js";
import CommonBreadCrumb from "../components/CommonBreadCrumb.vue";
import { removeToken } from "../utils/token.js";

export default {
    components: {
        CommonBreadCrumb,
    },
    data() {
        return {
            name: "",
        };
    },
    created() {
        this.name = getToken("username");
    },
    methods: {
        // 折叠侧边栏菜单
        closeMenu() {},
        // 登出
        handleClick(command) {
            if (command === "logout") {
                // 清除cookie中的数据
                removeToken("token");
                removeToken("username");
                // 跳转到登录页面
                this.$router.push({ name: "login" });
            }
        },
    },
};
</script>

<style lang="scss">
.el-header {
    background-color: rgb(16, 124, 231);
    .header {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .left-content {
            display: flex;
            align-items: center;
            .bread {
                margin-left: 20px;
                .el-breadcrumb__item {
                    font-size: 16px;
                    &:first-child {
                        .el-breadcrumb__inner {
                            color: #fff;
                        }
                    }
                    .el-breadcrumb__inner {
                        color: rgb(255, 208, 75);
                    }
                }
            }
        }

        .right-content {
            .head-img {
                margin-right: 20px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }
    }
}
</style>

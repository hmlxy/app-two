<template>
    <el-aside width="220px">
        <div class="aside-menu">
            <p class="title">通用管理系统</p>
            <el-menu router unique-opened text-color="#fff" :default-openeds="defaultOpeneds">
                <el-submenu v-for="item in filteredMenus" :key="item.name" :index="item.name">
                    <template slot="title">
                        <i :class="item.iconClass" class="menu-icon"></i>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item-group v-for="child in item.children" :key="child.name">
                        <!-- 这里的:index绑定path后，还有el-menu的router属性，点击就能自动跳转路径 -->
                        <el-menu-item :index="child.path">
                            <i :class="child.iconClass" class="menu-icon"></i>
                            <span>{{ child.name }}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </el-aside>
</template>

<script>
export default {
    data() {
        return {
            menus: [],
            // 默认打开的submenu
            defaultOpeneds: ["学生管理"],
        };
    },
    created() {
        this.menus = [...this.$router.options.routes];
    },

    computed: {
        // 过滤出需要显示的menu
        filteredMenus() {
            return this.menus.filter((item) => !item.hidden);
        },
    },
};
</script>

<style lang="less" scoped>
.el-aside {
    height: 100vh;
    text-align: left;
    background-color: rgb(16, 124, 231);
    .aside-menu {
        .title {
            height: 80px;
            line-height: 80px;
            margin-left: 20px;
            font-size: 24px;
            color: #fff;
        }
        .el-menu {
            // 去除和header的边距
            border: 0;
            /deep/.el-submenu {
                // 全局颜色
                background-color: rgb(16, 124, 231);
                // 主菜单的图标和内容颜色
                .el-submenu__title {
                    i {
                        color: #fff;
                    }
                }
                .el-submenu__title:hover {
                    background-color: #ffffff19;
                    i {
                        color: rgb(255, 208, 75);
                    }
                    span {
                        color: rgb(255, 208, 75);
                    }
                }

                // 子菜单体的全局
                .el-menu {
                    background-color: rgb(16, 124, 231);
                    // 这之间还有子菜单的标题

                    // 子菜单item内容
                    .el-menu-item {
                        background-color: rgb(16, 124, 231);

                        &:hover {
                            background-color: #ffffff19;
                            i {
                                color: rgb(255, 208, 75);
                            }
                            span {
                                color: rgb(255, 208, 75);
                            }
                        }
                    }

                    .el-menu-item.is-active {
                        background-color: rgb(16, 124, 231);

                        i {
                            color: rgb(255, 208, 75);
                        }
                        span {
                            color: rgb(255, 208, 75);
                        }
                    }
                }
            }

            .menu-icon {
                color: #fff;
                margin-right: 20px;
            }
        }
    }
}
</style>

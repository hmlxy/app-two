<template>
    <div>
        <h1>权限管理</h1>
        <el-tree :data="menus" show-checkbox node-key="id" :props="defaultProps" ref="trees">
        </el-tree>

        <el-button type="primary" size="default" @click="getNode">get node</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [],
            data: [],
            defaultProps: {
                // 这里指定的是menus中的属性
                label: "name",
                children: "children",
            },
        };
    },

    mounted() {
        // 获取router的路由配置
        this.menus = [...this.$router.options.routes];

        // 权限管理的思路
        // 根据不同的用户登录返回不同的路由权限菜单
        // 根据树形控件实现权限的控制
        // 根据角色不同，勾选不同，提交后端保存
        // 用户登录时，查询该用户的权限从而动态渲染页面
        // 动态添加路由使用addRoute
    },

    methods: {
        getNode() {
            // 妈的，getCheckedNode是专门的方法名
            // 设置目前勾选的节点，使用此方法必须设置 node-key 属性
            let arr = this.$refs.trees.getCheckedNodes();
            console.log(arr, "node");
        },
    },
};
</script>

<style></style>

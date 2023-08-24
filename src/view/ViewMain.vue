<template>
    <div class="home">
        <el-container>
            <CommonMenu></CommonMenu>
            <el-container direction="vertical">
                <CommonHeader></CommonHeader>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import CommonMenu from "../components/CommonMenu.vue";

export default {
    components: {
        CommonHeader,
        CommonMenu,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    .el-main {
        height: 500px;
    }
}
</style>

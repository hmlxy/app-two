<template>
    <div class="workMend">
        <el-table :data="tableData" v-loading="loading" style="width: 100%" height="500px">
            <el-table-column prop="id" label="学号"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="cla" label="班级"> </el-table-column>
            <el-table-column prop="title" label="标题"> </el-table-column>
            <el-table-column prop="completed_text" label="完成情况"> </el-table-column>
        </el-table>
        <CommonPagenation :total="total" :url="url"></CommonPagenation>
    </div>
</template>

<script>
import CommonPagenation from "@/components/CommonPagenation.vue";

export default {
    components: {
        CommonPagenation,
    },
    data() {
        return {
            tableData: [],
            loading: true,
            total: 0,
            url: "/works",
        };
    },
};
</script>

<style lang="scss" scoped>
.workMend {
    position: relative;
    height: 100%;

    .el-pagination {
        position: absolute;
        right: 0;
        margin-top: 10px;
    }
}
</style>

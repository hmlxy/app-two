<template>
    <div class="works">
        <el-table :data="tableData" v-loading="loading" style="width: 100%" height="500px">
            <el-table-column prop="id" label="学号"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="cla" label="班级"> </el-table-column>
            <el-table-column prop="title" label="标题"> </el-table-column>
            <el-table-column prop="completed_text" label="完成情况"> </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSzie"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
    </div>
</template>

<script>
import { getWorkData } from "@/utils/table.js";

export default {
    data() {
        return {
            tableData: [],
            loading: true,
            currentPage: 1,
            pageSzie: 5,
            total: 0,
            form: {
                name: "",
            },
        };
    },

    created() {
        // 初始化数据
        this.getWorks();
    },

    methods: {
        getWorks() {
            // 使用后端分页
            getWorkData(this, "/works", { page: this.currentPage, size: this.pageSzie });
        },

        // 改变每页展示条数
        handleSizeChange(val) {
            this.pageSzie = val;
            this.currentPage = 1;
            // 点击后传入点击的参数，
            getWorkData(this, "/works", { page: this.currentPage, size: this.pageSzie });
        },
        // 改变当前页码
        handleCurrentChange(val) {
            this.currentPage = val;
            getWorkData(this, "/works", { page: this.currentPage, size: this.pageSzie });
        },
    },
};
</script>

<style lang="scss" scoped>
.works {
    position: relative;
    height: 100%;

    .el-pagination {
        position: absolute;
        right: 0;
        margin-top: 10px;
    }
}
</style>

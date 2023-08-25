<template>
    <div class="">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSzie"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :url="url"
        >
        </el-pagination>
    </div>
</template>

<script>
import { getWorkData } from "@/utils/table.js";

export default {
    props: {
        total: Number,
        url: String,
    },
    data() {
        return {
            currentPage: 1,
            pageSzie: 5,
        };
    },

    created() {
        // 初始化数据
        this.getWorks();
    },

    methods: {
        // 获取数据
        getWorks() {
            // 使用后端分页
            // 因为要使用父组件的各种方法，所以要传入this.$parent
            // 也就是父组件实例
            getWorkData(this.$parent, this.url, {
                page: this.currentPage,
                size: this.pageSzie,
            });
        },

        // 改变每页展示条数
        handleSizeChange(val) {
            this.pageSzie = val;
            this.currentPage = 1;
            // 点击后传入点击的参数，
            getWorkData(this.$parent, this.url, {
                page: this.currentPage,
                size: this.pageSzie,
            });
        },
        // 改变当前页码
        handleCurrentChange(val) {
            this.currentPage = val;
            getWorkData(this.$parent, this.url, {
                page: this.currentPage,
                size: this.pageSzie,
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>

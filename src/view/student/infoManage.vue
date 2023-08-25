<template>
    <div class="infomanage">
        <el-dialog
            :title="isAdd === true ? '新增用户' : '编辑用户'"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="dialogBeforeClose"
        >
            <el-form
                :model="formAdd"
                ref="formAdd"
                :rules="rules"
                label-width="80px"
                :inline="false"
                size="normal"
            >
                <el-form-item label="ID" prop="id">
                    <el-input v-model="formAdd.id" placeholder="请输入ID"></el-input>
                </el-form-item>

                <el-form-item label="姓名" prop="name">
                    <el-input v-model="formAdd.name" placeholder="请输入姓名"></el-input>
                </el-form-item>

                <el-form-item label="年龄" prop="age">
                    <el-input v-model="formAdd.age" placeholder="请输入年龄"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="sex">
                    <el-select v-model="formAdd.sex" placeholder="请选择性别">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="状态" prop="state">
                    <el-select v-model="formAdd.state" placeholder="请选择状态">
                        <el-option label="已入学" :value="1"></el-option>
                        <el-option label="未入学" :value="2"></el-option>
                        <el-option label="休学中" :value="3"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="入校时间" prop="time">
                    <el-date-picker
                        v-model="formAdd.time"
                        type="date"
                        placeholder="请选择入校时间"
                        value-format="yyyy-MM-DD"
                    ></el-date-picker>
                </el-form-item>

                <el-form-item label="班级" prop="cla">
                    <el-select v-model="formAdd.cla" placeholder="请选择班级">
                        <el-option label="2" :value="2"></el-option>
                        <el-option label="1" :value="1"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="父亲" prop="father">
                    <el-input v-model="formAdd.father" placeholder="请输入姓名"></el-input>
                </el-form-item>

                <el-form-item label="母亲" prop="mather">
                    <el-input v-model="formAdd.mather" placeholder="请输入姓名"></el-input>
                </el-form-item>

                <el-form-item label="地址" prop="addr">
                    <el-input v-model="formAdd.addr" placeholder="请输入地址"></el-input>
                </el-form-item>

                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="formAdd.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer">
                <el-button @click="dialogBeforeClose">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>

        <el-form :model="form" ref="form" label-width="80px" :inline="true" size="normal">
            <el-form-item>
                <el-button type="primary" @click="createStudent">添加</el-button>
            </el-form-item>
            <div class="search-box">
                <el-form-item label="" prop="name">
                    <el-input
                        suffix-icon="el-icon-search"
                        v-model="form.name"
                        placeholder="请输入姓名"
                    ></el-input>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="onSearch">查询</el-button>
                </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="reset">重置</el-button>
                </el-form-item>
            </div>
        </el-form>

        <el-table :data="getPageData" style="width: 100%" height="500px">
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="sex_text" label="性别"> </el-table-column>
            <el-table-column prop="age" label="年龄"> </el-table-column>
            <el-table-column prop="father" label="父亲"> </el-table-column>
            <el-table-column prop="mather" label="母亲"> </el-table-column>
            <el-table-column prop="time" label="入校时间"> </el-table-column>
            <el-table-column prop="addr" label="地址"> </el-table-column>
            <el-table-column prop="phone" label="手机号"> </el-table-column>
            <el-table-column label="操作" width="200px">
                <template slot-scope="scope">
                    <el-button
                        type="success"
                        size="mini"
                        @click="handleEdit(scope.row)"
                        icon="el-icon-edit"
                        >编辑</el-button
                    >
                    <el-button
                        type="danger"
                        size="mini"
                        @click="handleDelete(scope.row)"
                        icon="el-icon-delete"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
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
import { getData, changeInfo, deleteInfo, searchInfo } from "@/utils/table.js";

export default {
    data() {
        return {
            // 表格部分
            tableData: [],
            currentPage: 1,
            pageSzie: 5,
            total: 0,
            form: {
                name: "",
            },
            // 新增弹窗
            isAdd: true,
            dialogVisible: false,
            formAdd: {
                id: "",
                name: "",
                age: "",
                sex: "",
                father: "",
                mather: "",
                state: "",
                class: "",
                time: "",
                addr: "",
                phone: "",
            },
            rules: {
                id: [{ required: true, message: "请输入ID", trigger: "blur" }],
                name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
                age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
                sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
                state: [{ required: true, message: "请选择状态", trigger: "blur" }],
                addr: [{ required: true, message: "请输入地址", trigger: "blur" }],
                phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
            },
        };
    },
    // 实现动态搜索，也就是每次输入都执行搜索
    // 后端根据空查询自动重置
    watch: {
        "form.name"() {
            this.onSearch();
        },
    },
    created() {
        // 初始化
        this.getTableData();
    },
    methods: {
        // 获取表格数据
        getTableData(params) {
            getData(this, "/student", params, ["sex", "state"]);
        },

        // 删除单个信息
        handleDelete(row) {
            deleteInfo(this, "/student", row.id, getData);
        },
        // 改变每页展示条数
        handleSizeChange(val) {
            this.pageSzie = val;
            this.currentPage = 1;
        },
        // 改变当前页码
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        // 搜索
        onSearch() {
            searchInfo(this, "/info", this.form.name);
        },
        // 重置
        reset() {
            this.getTableData();
        },
        // 打开添加弹窗
        createStudent() {
            this.isAdd = true;
            this.dialogVisible = true;
        },

        //关闭添加弹窗
        dialogBeforeClose() {
            // 清理之前的form数据
            this.$refs.formAdd.resetFields();
            // 关闭弹窗
            this.dialogVisible = false;
        },

        // 提交添加
        submit() {
            this.$refs.formAdd.validate((valid) => {
                // 验证成功
                if (valid) {
                    // 判断是新增还是编辑
                    if (this.isAdd === true) {
                        // 封装的接口，post时为新增
                        changeInfo(this, "post", "/student", this.formAdd, getData);
                    } else {
                        // 封装的接口，put时为编辑
                        changeInfo(this, "put", "/student", this.formAdd, getData);
                    }
                }
            });
        },

        // 编辑
        handleEdit(row) {
            this.isAdd = false;
            this.dialogVisible = true;
            // 回写数据,不能直接传入row
            // 对当前row的数据进行深拷贝
            // 深拷贝也就是完全独立的副本，修改数据不会影响源数据
            this.formAdd = JSON.parse(JSON.stringify(row));
        },
    },
    computed: {
        // 计算选中页面的内容
        getPageData() {
            // 获取每个页面该有的数据，也就是起始位置
            return this.tableData.slice(
                (this.currentPage - 1) * this.pageSzie,
                this.currentPage * this.pageSzie
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.infomanage {
    position: relative;
    height: 100%;
    .el-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .el-pagination {
        position: absolute;
        right: 0;
        margin-top: 10px;
    }
}
</style>

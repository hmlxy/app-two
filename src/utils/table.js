// 不用箭头函数是害怕获取this出错

// 获取表格的数据
// root表示this，url是路由，params是参数
export function getData(root, url, params) {
    root.$http
        .get(url, { params: params || {} })
        .then((res) => {
            if (res.data.status === 200) {
                root.total = res.data.total;
                root.tableData = res.data.data;
                // 尽量不要修改原数据
                root.tableData.forEach((item) => {
                    item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
                    item.state === 1
                        ? (item.state_text = "已入学")
                        : item.state === 2
                        ? (item.state_text = "未入学")
                        : (item.state_text = "休学中");
                });
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

// 新增和修改学生
export function changeInfo(root, method, url, data, callback) {
    root.$http[method](url, data)
        .then((res) => {
            // 回到函数，代表添加后重新获取数据
            callback(root, url);
            // 关闭弹窗
            root.dialogVisible = false;
            // 清理之前的form数据
            root.$refs.formAdd.resetFields();
            // 成功提示
            root.$message({ type: "success", message: res.data.message });
        })
        .catch((err) => {
            console.error(err, "出错了");
        });
}

// 删除学生
export function deleteInfo(root, url, id, callback) {
    root.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    })
        .then(() => {
            // 使用字符串拼接获取具体的url
            root.$http
                .delete(`${url}/${id}`, id)
                .then((res) => {
                    if (res.data.status === 200) {
                        root.$message({
                            type: "success",
                            message: "删除成功!",
                        });
                        // 删除后重新获取数据
                        callback(root, url);
                    }
                })
                .catch((err) => {
                    console.error(err, "删除失败");
                });
        })
        .catch(() => {
            root.$message({
                type: "info",
                message: "已取消删除",
            });
        });
}

// 搜索学生
export function searchInfo(root, url, params) {
    root.$http
        .get(`${url}/${params}`, params)
        .then((res) => {
            root.tableData = res.data.searchList;
            // 尽量不要修改原数据
            root.tableData.forEach((item) => {
                item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
                item.state === 1
                    ? (item.state_text = "已入学")
                    : item.state === 2
                    ? (item.state_text = "未入学")
                    : (item.state_text = "休学中");
            });
        })
        .catch((err) => {
            console.error(err);
        });
}

// 获取作业数据
export function getWorkData(root, url, params) {
    root.$http
        .get(url, { params: params || {} })
        .then((res) => {
            if (res.data.status === 200) {
                root.total = res.data.total;
                root.tableData = res.data.data;
                // 尽量不要修改原数据
                root.tableData.forEach((item) => {
                    item.completed === true
                        ? (item.completed_text = "完成")
                        : (item.completed_text = "未完成");
                });
                root.loading = false;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

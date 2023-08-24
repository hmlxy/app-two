// 不用箭头函数是害怕获取this出错

import { Message } from "element-ui";

// 获取表格的数据
// root表示this，url是路由，params是参数
export function getTableData(root, url, params) {
    root.http(url, { params: params || {} })
        .then((res) => {
            if (res.data.status === 200) {
                root.total = res.data.total;
                root.tableData = res.data.data;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

// 新增和修改学生
export function changeInfo(root, method, url, data, callback) {
    root.http[method](url, data)
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
            console.error(err);
        });
}

import Mock from "mockjs";

let echartsData = {
    legend: ["技术总监", "产品经理", "后端开发", "前端开发", "运维/测试"],
    xAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    series: [
        {
            name: "技术总监",
            type: "line",
            stack: "总量",
            // 注意data的值是一个数组，而不是对象
            data: Mock.mock({
                "array|7": ["@integer(20, 100)"],
            }).array,
        },
        {
            name: "产品经理",
            type: "line",
            stack: "总量",
            data: Mock.mock({
                "array|7": ["@integer(20, 100)"],
            }).array,
        },
        {
            name: "后端开发",
            type: "line",
            stack: "总量",
            data: Mock.mock({
                "array|7": ["@integer(20, 100)"],
            }).array,
        },
        {
            name: "前端开发",
            type: "line",
            stack: "总量",
            data: Mock.mock({
                "array|7": ["@integer(20, 100)"],
            }).array,
        },

        {
            name: "运维/测试",
            type: "line",
            stack: "总量",
            data: Mock.mock({
                "array|7": ["@integer(20, 100)"],
            }).array,
        },
    ],
};

export default {
    // 获取图表的数据
    getEChartsData(config) {
        return {
            status: 200,
            message: "获取数据成功",
            data: echartsData,
        };
    },
};

<template>
    <div class="data-view">
        <el-card>
            <div class="map1" ref="map1"></div>
        </el-card>

        <el-card>
            <div class="map2" ref="map2"></div>
        </el-card>
    </div>
</template>
<script>
import { getEChartsData } from "@/utils/dataview.js";
export default {
    data() {
        return {};
    },

    // mounted才能使用DOM
    mounted() {
        this.demo();
        getEChartsData(this, "/dataview");
    },

    methods: {
        demo() {
            var Chart = this.$echarts.init(this.$refs.map1);
            // 绘制图表
            Chart.setOption({
                title: {
                    text: "ECharts 入门示例",
                },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            });
        },

        draw(legend, xAxis, series) {
            // 初始化echarts实例挂载到DOM元素
            let myChart = this.$echarts.init(this.$refs.map2);
            // 创建echarts配置
            let option = {
                title: {
                    text: "图表",
                },
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    data: legend,
                },
                xAxis: {
                    type: "category",
                    data: xAxis,
                },
                yAxis: {
                    type: "value",
                },
                series: series,
            };
            // 根据echarts配置显示
            myChart.setOption(option);
        },
    },
};
</script>

<style lang="scss" scoped>
.data-view {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .el-card {
        width: 50%;
        .map1,
        .map2 {
            height: 500px;
        }
    }
}
</style>

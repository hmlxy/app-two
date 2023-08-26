<template>
    <div class="score-view">
        <div class="main" ref="main"></div>
    </div>
</template>

<script>
import chinaJson from "echarts/map/json/china.json";
export default {
    data() {
        return {};
    },
    mounted() {
        this.scoreMap();
    },
    methods: {
        scoreMap() {
            let myChart = this.$echarts.init(this.$refs.main);

            this.$echarts.registerMap("china", chinaJson);

            // 定义option
            let option = {
                geo: {
                    // 配置地区
                    map: "china",
                    // 长宽比
                    aspectScale: 0.75,
                    // 放大比例
                    zoom: 1.1,
                    // 配置特定区域
                    regions: [
                        {
                            name: "南海诸岛",
                        },
                    ],
                },
            };

            myChart.setOption(option);
        },
    },
};
</script>

<style lang="scss" scoped>
.score-view {
    width: 100%;
    height: 100%;
    .main {
        width: 100%;
        height: 600px;
    }
}
</style>

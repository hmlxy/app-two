<template>
    <div class="score-view">
        <div class="main" ref="main"></div>
    </div>
</template>

<script>
import zhejiangJson from "echarts/map/json/province/zhejiang.json";
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

            this.$echarts.registerMap("zhejiang", zhejiangJson);

            let option = {
                backgroundColor: "green", // 设置地图的背景色
                // 地理坐标系组件
                // geo和series几乎要都设置相似属性
                // geo: {
                //     // 配置地区
                //     map: "china",
                //     // 长宽比
                //     aspectScale: 0.75,
                //     // 放大比例
                //     zoom: 1.1,
                //     // 配置特定区域
                //     regions: [
                //         {
                //             name: "南海诸岛",
                //         },
                //     ],
                // },

                // 地图的显示多层的
                series: [
                    // 地图基础配置
                    {
                        // 图表属性为地图
                        type: "map",
                        zoom: 1.2,
                        // 配置地图地区
                        map: "zhejiang",
                        // 配置item元素的样式

                        itemStyle: {
                            // 正常模式
                            normal: {
                                // 配置阴影
                                // shadowColor: "#00000077",
                                // shadowOffsetX: 10,
                                // shadowOffsetY: 30,
                                // 配置border
                                borderWidth: 0.1,
                                borderColor: "#000",
                                // 配置区域颜色
                                areaColor: {
                                    //采用径向渐变
                                    type: "radial",
                                    // x,y是指渐变中心坐标，表示与高度宽度的比例，此时为区域中心
                                    x: 0.5,
                                    y: 0.5,
                                    // 渐变的范围
                                    r: 0.1,

                                    // 径向渐变的坐标点
                                    colorStops: [
                                        {
                                            // 0表示开始位置
                                            offset: 0,
                                            color: "#2c5fd7", //
                                        },
                                        {
                                            // 1表示结束位置
                                            offset: 1,
                                            color: "#fff", //
                                        },
                                    ],
                                    // 采用全局坐标系
                                    globalCoord: true,
                                },
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: "#000",
                                        fontSize: "12px", // 设置文字颜色为白色
                                    },
                                },
                            },
                            // hover模式下的配置
                            emphasis: {
                                // 配置border
                                borderWidth: 0,
                                // 配置阴影
                                shadowColor: "#00000077",
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                areaColor: "orange",
                                // 设置文字颜色
                                label: {
                                    // 表示是否显示label
                                    show: true,
                                    textStyle: {
                                        color: "#FFFFFF", // 设置文字颜色为白色
                                    },
                                },
                            },
                        },
                    },
                    // 散点图配置
                    {
                        type: "effectScatter", //启用涟漪模式
                        coordinateSystem: "geo", //根据geo地理坐标系
                        showEffectOn: "render", //  绘制完成后显示
                        symbolSize: 10, // 散点大小
                        zlevel: 1, // 设置显示层级
                        data: [], //点的数据
                        rippleEffect: {
                            period: 15,
                            scale: 4,
                        }, //涟漪配置
                    },
                ],
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

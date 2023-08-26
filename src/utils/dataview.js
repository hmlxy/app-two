// 获取图表数据
export function getEChartsData(root, url) {
    root.$http
        .get(url)
        .then((res) => {
            console.log(res, "res");
            if (res.data.status === 200) {
                let { legend, xAxis, series } = res.data.data;
                root.draw(legend, xAxis, series);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

// 获取地图数据

export function getMapData(root, url) {}

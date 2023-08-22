const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    // 自定义配置
    devServer: {
        // 自动打开项目
        open: true,
        // 设置代理和跨域
        // proxy: {
        //     "/api": {
        //         // 访问/api时会自动跳转到target
        //         target: "http://localhost:3000",
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "/api": "",
        //         },
        //     },
        // },
    },
});

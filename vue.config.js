const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    // 自定义配置
    devServer: {
        // 自动打开项目
        open: true,
    },
    // loader-css默认scss，这里声明sass
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             sassOptions: {
    //                 indentedSyntax: true,
    //             },
    //         },
    //     },
    // },
});

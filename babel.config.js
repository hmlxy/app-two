module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    // 插件的配置
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk",
            },
        ],
    ],
};

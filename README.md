# app-two

<!-- 项目部署nginx -->
<!-- 修改 nginx 的 nginx.conf 文件 -->
<!-- 解决404错误 -->

location / {
<!-- # root 为 vue 项目 dist 文件夹路径 -->
root C:\Users\HML\Desktop\VueProject\app-two\dist;
index index.html index.htm; # 加入
try_files $uri $uri/ @router;
}

<!-- # 如果 vue-router 不是真实存在的
# 通过这个配置示例，所有匹配到 @router 内部位置的请求都将被重写为 /index.html -->
<!-- 解决500错误 -->

location @router {
rewrite ^.\*$ /index.html last;
}

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

https://www.showdoc.com.cn/jinducasey/8321036098744323
// 密码 jinduVIP
然后点击提交

<template>
    <div class="not-found">
        <div class="wrapper">
            <div class="big">404</div>
            <div class="big">页面不见了</div>
            <!-- 这里的路由跳转/,而/会重定向/login,
            那么之后需要判断是否登录，从而直接从 /login重定向/home-->
            <div class="content">
                点击 <router-link class="link" to="/"> 这里 </router-link> 进入首页
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found {
    height: 100vh;
    position: relative;
    background: url("@/assets/images/2.png") center no-repeat;
    background-size: cover;
    .wrapper {
        position: absolute;
        top: 25%;
        left: 35%;
        .big {
            font-size: 72px;
            color: #f38b2a;
            margin-bottom: 40px;
        }
        .content {
            font-size: 36px;
            color: #fff;
            .link {
                text-decoration: none;
                color: green;
            }
        }
    }
}
</style>

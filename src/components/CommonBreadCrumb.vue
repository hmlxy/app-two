<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{
            item.name
        }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

# -*- coding: utf-8 -*-
# @Time : 2019/5/29 18:27
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : real_time.py
# @Software: PyCharm
<template>
       <div>
               <!--导航-->
               <el-row class="tac">
  <el-col :span="3">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-camera-solid"></i>
          <span>人流检测</span>
        </template>
        <el-menu-item-group>
          <template slot="title">监测数据</template>
          <el-menu-item index="1-1">人流排行榜</el-menu-item>
          <el-menu-item index="1-1">实时人流数据</el-menu-item>
          <el-menu-item index="1-2">在线地点数据</el-menu-item>
          <el-menu-item index="1-1">在线设备数据</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="统计数据">
          <el-menu-item index="1-3">人流趋势</el-menu-item>
          <el-menu-item index="1-4">在线设备统计</el-menu-item>
          <el-menu-item index="1-4">高危地点统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">阈值设定</el-menu-item>
          <el-menu-item index="1-2">意见建议</el-menu-item>
          <el-menu-item index="1-1">在线设备数据</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
        </div>
</template>

<script>
    export default {
        name: "real_time",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>
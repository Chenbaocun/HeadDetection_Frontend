<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/10 18:50
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : platformIntroduce.py
# @Software: PyCharm
-->
<template>
    <el-card class="box-card" style="margin-left: 40%;margin-top: 3%">
  <div slot="header" class="clearfix">
    <span style="font-size: x-large ;font-family: 黑体">平台简介</span>
  </div>
  <div  class="text item">
        随着以深度学习为代表的人工智能技术的蓬勃发展，越来越多的智能化应用涌现并高效准确地服务着人类，解决了许许多多的传统人类难以感知和解决的问题。与此同时，5G时代的到来，催生着各种边缘计算与云计算结合的数据处理方案，《警察数数》公共地点人流量计算云监管平台由此而来，本平台以计算机视觉为核心，边云协同架构为创新点，实现对公共地点人流量的实时智能监控。
  </div>
</el-card>
</template>

<script>
    export default {
        name: "platformIntroduce"
    }
</script>

<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
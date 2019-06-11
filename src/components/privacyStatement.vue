<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/10 18:51
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : privacyStatement.py
# @Software: PyCharm
-->
<template>
<el-card class="box-card" style="margin-left: 40%;margin-top: 3%">
  <div slot="header" class="clearfix">
    <span style="font-size: x-large ;font-family: 黑体">隐私声明</span>
  </div>
  <div  class="text item">
        您的个人隐私数据仅用于此平台的功能性需求及开发团队的科学研究，不会以任何形式出售贩卖给他人。
  </div>
</el-card>
</template>

<script>
    export default {
        name: "privacyStatement"
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
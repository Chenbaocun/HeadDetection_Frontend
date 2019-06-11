<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/10 18:49
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : ECShardware.py
# @Software: PyCharm
-->
<template>
    <el-card class="box-card" style="margin-left: 40%;margin-top: 3%">
        <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="config"
        label="云服务器配置信息"
        width="350">
      </el-table-column>
    </el-table>
  </template>

</el-card>
</template>

<script>
    export default {
        name: "ECShardware",
        data(){
            return{
                tableData:[{
                    config:"CPU：Intel Xeon E5-2682 v4 1核"
                },
                    {
                        config:"内存：DDR4 2G内存"
                    },
                    {
                        config:"带宽：1M"
                    },
                    {
                        config:"硬盘：40G"
                    }]
            }
        }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
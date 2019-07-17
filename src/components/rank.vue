<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/11 21:16
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : rank.py
# @Software: PyCharm
-->
<template>
    <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading">
      <el-table-column
        prop="order"
        label="排名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="target"
        label="地点/场景"
        width="150">
      </el-table-column>
       <el-table-column
        prop="averageNum"
        label="平均人数"
        width="200">
      </el-table-column>
        </el-table>
        </div>
</template>

<script>
    export default {
        name: "rank",
        data(){
            return{
                tableData:[],
                loading:true
            }
        },
        mounted(){
            this.getRank()
        },
        methods:{
            getRank(){
                this.$ajax.post('/getRank/').then(function (response) {//这个请求不需要发送参数
                if (response['data'] != "") {//这返回的不是null，而是""
                    var result=(response['data']);
                    this.tableData=result['data'];
                    this.loading=false;
                    return true;
                }
            }.bind(this))
                .catch(function (error) {
                    this.open4(error);
                    return false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
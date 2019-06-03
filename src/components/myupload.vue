<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/3 18:37
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : myupload.py
# @Software: PyCharm
-->
<template>
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="filename"
        label="文件名"
        width="250">
      </el-table-column>
      <el-table-column
        prop="status"
        label="当前状态"
        width="250">
      </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: "myupload",
        data() {
        return {
          tableData: []
        }
      },
      mounted(){
        this.myupload()
      },
        methods:{
            myupload() {
            this.$ajax.post('/api/myupload/').then(function (response) {//这个请求不需要发送参数
                var _this=this;
                if (response['data'] != "") {//这返回的不是null，而是""
                    var result=(response['data']);
                    this.tableData=result['data'];
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
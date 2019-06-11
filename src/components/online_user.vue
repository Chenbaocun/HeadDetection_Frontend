<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/11 14:46
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : online_user.py
# @Software: PyCharm
-->
<template>

  <el-card class="box-card" style="margin-left: 40%;margin-top: 3%">
  <div slot="header" class="clearfix">
    <span style="font-size: x-large ;font-family: 黑体">正在进行目标检测任务的边缘设备总数</span>
  </div>
  <div  class="text item" v-loading="loading">
      {{total_online_user}}
  </div>
</el-card>

</template>

<script>
    export default {
        name: "online_user",
        data(){
            return{
                total_online_user:'',
                loading:true
            }
        },
        mounted(){
          this.getTotalOnlineUser()
        },
        methods:{
            getTotalOnlineUser(){
                var _this=this;
          this.$ajax.post('/api/get_TotalOnlineUser/').then(function (response) {//这个请求不需要发送参数
                // console.log(response);
                if (response['data'] != '-1') {//这返回的不是null，而是""
                    this.total_online_user=response['data'];
                    this.loading=false;
                    return true;
                }
                else {
                    this.total_online_user=0;
                    this.loading=false;
                }
            }.bind(this))
                .catch(function (error) {
                    _this.open4(error);
                    return false;
                })
            },
            open4(text) {
                 this.$message.error(text);
        },
        }
    }
</script>

<style scoped>
.text {
    font-size: 50px;
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
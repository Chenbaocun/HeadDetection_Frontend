<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/13 18:43
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : moniter_advice.py
# @Software: PyCharm
-->
<template>
    <el-card class="box-card" style="margin-left: 40%;margin-top: 3%">
  <div slot="header" class="clearfix">
    <span style="font-size: x-large ;font-family: 黑体">监测建议</span>
  </div>
  <div  class="text item" >
      根据平台内所有用户上报的监测数据，近期<div style="font-size: 20px ;color: red" v-loading="loading">{{place}}</div>出现异常数最多为<div style="font-size: 20px ;color: red" v-loading="loading">{{count}}</div>次,因此希望您及时向有关部门进行汇报，加强对该类区域的监视和巡查(*^▽^*)！
  </div>
</el-card>
</template>

<script>
    export default {
        name: "moniter_advice",
        data(){
            return{
                place:"",
                count:"",
                loading:true
            }
        },
        mounted(){
            this.gethighest()
        },
        methods:{
            gethighest(){
                var _this=this;
                this.$ajax.post('/gethighest/').then(function (response) {//这个请求不需要发送参数
                if (response['data'] != "") {//这返回的不是null，而是""
                    var res=response['data'].split("#");
                    this.place=res[0];
                    this.count=res[1];
                    this.loading=false
                    return true;
                }
            }.bind(this))
                .catch(function (error) {
                    _this.open4(error);
                    return false;
                })
            }
        }

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
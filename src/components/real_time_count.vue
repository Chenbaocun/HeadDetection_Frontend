<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/10 21:00
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : real_time_count.py
# @Software: PyCharm
-->
<template>
    <div>

    <el-row class="tac" style="margin-top: 5%">
             <el-col :span="20">
                <el-card class="box-card" v-loading="loading">
                    <div slot="header" class="clearfix">
                        <span style="font-size: x-large ;font-family: 黑体">检测场景预览(场景识别)</span>
                    </div>
                    <div  class="text item" :style="style">

                    </div>
                </el-card>
             </el-col>

             <el-col :span="2" >
                <el-card class="box-card" v-loading="loading">
                    <div slot="header" class="clearfix">
                        <span style="font-size: x-large ;font-family: 黑体">实时人数</span>
                    </div>
                    <div  class="text item" :style="style">
                        {{Total}}
                    </div>
                </el-card>
             </el-col>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "real_time_count",
        data(){
            return{
                Total:"0",
                style:'',//中间带连接线的可以使用‘’方式替代
                timer: '',  // 定时器名称
                loading:true
            }
        },
        mounted(){
            this.timer=setInterval(this.realTimeCount,500);
        },
        beforeDestroy(){
            clearInterval(this.timer);//关闭定时器
        },
        methods:{
            realTimeCount(){
            this.$ajax.post('/api/real_time_count/').then(function (response) {//这个请求不需要发送参数
                   // console.log(response['data']);
                if (response['data'] != "-1") {//这返回的不是null，而是""
                   this.Total=response['data']['real_time_count'];
                    if(response['data']['red']==1){
                        this.style={'font-size':'450px',color:'red'};
                    }
                    else{
                        this.style={'font-size':'450px',color:'green'};
                    }

                   this.loading=false
                }
                else {
                    this.Total="设备离线";
                    this.style={'font-size':'200px',color:'red'};
                    this.loading=false;
                    clearInterval(this.timer);//关闭定时器//离线就不再继续请求
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
.text {
    /*font-size: 450px;*/
    /*color: red;*/
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
    width: 530px;
  }
</style>
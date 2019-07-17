<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/12 16:35
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : history_statistic.py
# @Software: PyCharm
-->
<template>
    <div>
        <div id="linechart" style="width: 1000px;height:400px;" v-loading="loading"></div>
    </div>
</template>

<script>
    export default {
        name: "history_statistic",
        data(){
            return{
                source:[],
                loading:true
            }
        },
        // created(){
        //   this.getHistory();
        // },
        mounted(){
            this.getHistory();
            // this.drawLineChart()
        },
        methods:{
            getHistory(){
               var _this=this;
                this.$ajax.post('/getHistory/').then(function (response) {//这个请求不需要发送参数
                // console.log(response);
                    var i =0;
                    var source=[['data','count']];
                    var temp=[];
                if (response['data'] != "") {//这返回的不是null，而是""
                    var result=response['data'];
                    // console.log(result['data'][0]['count']);
                    for(i=0;i<result['data'].length;i++){
                            temp=[];
                            temp.push(result['data'][i]['date']);
                            temp.push(result['data'][i]['count']);
                            source.push(temp)
                    }
                    this.source=source;
                    this.drawLineChart();
                    return true;
                }
            }.bind(this))
                .catch(function (error) {
                    _this.open4(error);
                    return false;
                })
            },
            drawLineChart(){
                // 基于准备好的dom，初始化echarts实例
                // console.log(this.source);
                let myChart = this.$echarts.init(document.getElementById('linechart'));
              var option = {
                  legend: {},
                  tooltip: {},
                  dataset:{
                    source:this.source
                  },
                  xAxis: {
                      type: 'category',
                    },
                  yAxis: {},
                  series: [{
                         type: 'line'
                    }]
};
              myChart.setOption(option);
                this.loading=false
            },
     open4(text) {
        this.$message.error(text);
        },
        }
    }
</script>

<style scoped>

</style>
<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/13 18:47
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : dangerous_place.py
# @Software: PyCharm
-->
<template>
 <div>
        <div id="Pie" style="width: 1000px;height:600px;" v-loading="loading"></div>

 </div>
</template>

<script>
    export default {
        name: "dangerous_place",
        data(){
            return{
                 school:'',
                 dining:"",
                 mall:'',
                 government:'',
                 traffic:'',
                 loading:true
            }
        },
        mounted(){
            this.getPlacecount()
        },
        methods:{
            getPlacecount(){
                var _this=this;
                this.$ajax.post('/api/getPlacecount/').then(function (response) {//这个请求不需要发送参数
                if (response['data'] != "") {//这返回的不是null，而是""
                    var res=response['data'].split("#");
                    this.school=res[0];
                    this.dining=res[1];
                    this.mall=res[2];
                    this.government=res[3];
                    this.traffic=res[4];
                    console.log(this.traf);
                    this.drawPie();
                    return true;
                }
            }.bind(this))
                .catch(function (error) {
                    _this.open4(error);
                    return false;
                })
            },
            drawPie(){
                let myChart = this.$echarts.init(document.getElementById('Pie'));
                // app.title = '环形图';

var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['校园大门','学校食堂','大型商超','政府大门','交通枢纽']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:this.school, name:'校园大门'},
                {value:this.dining, name:'学校食堂'},
                {value:this.mall, name:'大型商超'},
                {value:this.government, name:'政府大门'},
                {value:this.traffic, name:'交通枢纽'}
            ]
        }
    ]
};
                myChart.setOption(option);
                this.loading=false
            }
        }
    }
</script>

<style scoped>

</style>
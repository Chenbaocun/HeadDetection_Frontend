<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/11 17:01
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : ImagePlayer.py
# @Software: PyCharm
-->
<template>
    <div class="">
    <el-image :src='src' v-loading="loading" @load="load"></el-image>
  </div>
</template>

<script>
    export default {
        name: "ImagePlayer",
        props:{
            Imageurl: String,
            state: Boolean
        },
        data(){
            return{
                src:this.Imageurl,
                loading:true
            }
        },
        methods:{
          load(){
              this.loading=false
          }
        },
        watch:{
             //更改视频源 videoUrl从弹出框组件传值
            Imageurl: function (val) {
                // alert(val);
                if (val !== '') {
                    this.src=val//付给imageurl的话是不会更新的
                    this.loading=true
                }
            },
           //弹出框关闭后暂停 否则一直在播放 state从弹出框组件传值
        // state: function (val) {
        //     if (val) {
        //         // alert(val);
        // this.$refs.videoPlayer.player.pause()
        // }
        // },
        }
    }
</script>

<style scoped>

</style>
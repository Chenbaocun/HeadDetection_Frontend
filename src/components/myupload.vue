<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/3 18:37
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : myupload.py
# @Software: PyCharm
-->
<template>
<div>
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
        width="200">
      </el-table-column>
      <el-table-column
         prop="status"
         label="操作" >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="videoPlay(scope.row.filename)" icon="el-icon-video-play" type="success" v-if="scope.row.status==='计算完成'">播放</el-button>
      </template>
    </el-table-column>
    </el-table>
    <!--弹出视频框-->
      <el-dialog
            title="服务器上传带宽有限，您可以缓冲完之后再进行播放(｡•́__ก̀｡)"
            :visible.sync="dialogVisible"
            ref="videoDialog"
            width="70%"
            height="70%"
            :close-on-click-modal="false"
            :before-close="handleClose">
          <video_player :video-url="videoUrl" :state="state" ></video_player>
            <!--<iframe id="video_iframe" src="//player.bilibili.com/player.html?aid=48217486&cid=84457072&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%;height:700px"> </iframe>-->
      </el-dialog>
</div>
</template>
<script>
import video_player from './video_player'
    export default {
        name: "myupload",
        components: {
        video_player
    },
        data() {
            return {
                tableData: [],
                dialogVisible: false,
                videoUrl:"",
                state:false
            }
        },
      mounted(){
        this.myupload()
      },
      methods:{
            myupload() {
            this.$ajax.post('/api/myupload/').then(function (response) {//这个请求不需要发送参数
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
        },
        videoPlay(filename){
          var videourl= "http://39.96.169.188/video_play/?filename="+filename;
          // alert(videourl);
          this.dialogVisible=true;
          this.videoUrl=videourl;
        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
              // document.getElementById('video_iframe').remove();
            this.videoUrl="";
            this.state=true;
            done();
          })
          .catch(_ => {});
      }
        },
    }

</script>

<style scoped>

</style>
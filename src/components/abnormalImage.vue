<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/11 16:37
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : abnormalImage.py
# @Software: PyCharm
-->
<template>
    <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading">
      <el-table-column
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="filename"
        label="文件名"
        width="150">
      </el-table-column>
       <el-table-column
        prop="target"
        label="检测场景"
        width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        label="当前状态"
        >
      </el-table-column>
       <el-table-column
        prop="result"
        label="计算结果"
        >
      </el-table-column>
      <el-table-column
         prop="status"
         label="操作" >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="ImagePlay(scope.row.filename)" icon="el-icon-video-play" type="success" v-if="scope.row.status==='计算完成'">查看</el-button>
      </template>
    </el-table-column>
    </el-table>
              <el-dialog
            title="服务器上传带宽有限，可能需要加载一点时间(｡•́__ก̀｡)"
            :visible.sync="dialogVisible"
            ref="videoDialog"
            width="70%"
            height="70%"
            :close-on-click-modal="false"
            ><!--:before-close="handleClose"-->

          <ImagePlayer :Imageurl="ImageUrl" :state="state" ></ImagePlayer>
      </el-dialog>
   </div>
</template>

<script>
    import ImagePlayer from './ImagePlayer'
    export default {
        name: "abnormalImage",
        components:{
            ImagePlayer
        },
         data() {
            return {
                tableData: [],
                dialogVisible: false,
                ImageUrl:"",
                state:false,
                loading:true
            }
        },
        mounted(){
        this.getAbnormalImageList()
      },
        methods:{
            getAbnormalImageList(){
                this.$ajax.post('/getAbnormalImageList/').then(function (response) {//这个请求不需要发送参数
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
            },
            ImagePlay(filename){//http://39.96.169.188 ???还有疑问
          var Imageurl= "/image_play/?filename="+filename;
          // alert(Imageurl);
          this.dialogVisible=true;
          this.ImageUrl=Imageurl;
        },
            handleClose(done) {
            this.$confirm('确认关闭？')
          .then(_ => {
              // document.getElementById('video_iframe').remove();
            this.ImageUrl="";
            this.state=true;
            done();
          })
          .catch(_ => {});
      }
        }
    }
</script>

<style scoped>

</style>
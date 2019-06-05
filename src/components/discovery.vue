<!--
# @Author: Tom Chen
# @Creation Date : 2019/3/26 0026 20:14  
# @Email:  chenbaocun@emails.bjut.edu.cn
# @File : discovery.vue
# @Software : PyCharm
-->
<!--template下边只能有一个element-->
<template>
<div>
    <el-card class="box-card" style="margin-left: 25%;margin-top: 1%">
                <div slot="header" class="clearfix">
                <span style="font-size: x-large ;font-family: 黑体">高精度目标检测</span>
                </div>
                <div class="text item">
                        &emsp;由于边缘端的检测SSD算法对于小目标的检测十分无力，为此我们在服务器端部署了更高精度的Faster-RCNN模型，但与此同时计算开销也会变大，
                    您可以通过点击或拖拽.mp4格式的视频文件进行上传，上传完成后，您的视频文件会自动进入队列等待进入目标检测任务。计算结束后，您会得到一个新的视频文件！</div>
    <el-upload
    accept=".mp4"
    class="upload-demo"
    drag
    :auto-upload="false"
    ref="upload"
    action="/api/UploadVideo/"
    name="upload_video"
    :limit="1"
    :on-success="onSuccess"
    :on-error="onError"
    :on-remove="onRemove"
    :before-upload="beforeUpload"
    :on-change="onChange"
    >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">请选择要进行人流量计算的视频(.mp4格式)</div>
    </el-upload>
    </el-card>
</div>


</template>

<script>
    export default {
        name: "discovery",
         data(){
           return{
               flag:-1,
           }
         },
        methods:{
        onSuccess(){
            this.$refs.upload.clearFiles();
            this.$notify({
                 title: '上传成功',
                 message: '视频文件上传成功，排队处理中....',
                 type: 'success'
        });
        },
        onError(){
             this.$notify({
                 title: '上传失败',
                 message: '未知原因上传失败，请重试！',
                 type: 'error'
        });
        },
        beforeUpload(file){
            if(file.type=='video/mp4'){

            }
            else {
                this.$refs.upload.clearFiles();
                this.$refs.upload.abort();
                this.$message({
                    type: 'error',
                    message: '您只能上传mp4格式的视频文件'
                                });
            }
        },
        onRemove(){
            this.$confirm('是否取消上传文件？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
        },
        onChange(file){
            var _this=this;
            if(file.status=='ready'){
            this.$ajax.post('/api/beforeUploadVideo/',this.$qs.stringify({//必须用qs模块，把数据整合成类似get型 uri的形式
                        filename: file.name
                    })).then(function (response) {//这个请求不需要发送参数
                if (response['data'] != "") {//这返回的不是null，而是""
                    // alert(response['data']);
                    _this.open4("对不起您已经上传过此文件了！");
                    _this.$refs.upload.clearFiles();
                    return false;//无效
                }
                else {
                    _this.$refs.upload.submit();
                    return true;//无效
                }
            }.bind(this))
                .catch(function (response) {
                    alert("进入了catch");
                });

        }
        },
        open4(text) {
        this.$message.error(text);
        },
        sleep(n) {
        var start = new Date().getTime();
        while (1) {
            if (new Date().getTime() - start > n) {
                break;
            }
        }

         },
        }
    }
</script>

<style scoped>
.item {
    margin-bottom: 20px;
    /*font-family: "黑体";*/
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
    width: 50%;

  }
</style>
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
                        &emsp;由于边缘端的检测SSD算法对于小目标的检测十分无力，为此我们在服务器端部署了更高精度的Faster-RCNN模型，
                    您可以通过点击或拖拽.pm4格式的视频文件进行上传，上传完成后，您的视频文件会自动进入队列等待进入目标检测任务。计算结束后，您会得到一个新的视频文件！</div>
    <el-upload
    accept=".mp4"
  class="upload-demo"
  drag
  action=""
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">请选择要进行人流量监测视频文件(.mp4格式)</div>
</el-upload>
    </el-card>


</div>


</template>

<script>
    export default {
        name: "discovery",

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
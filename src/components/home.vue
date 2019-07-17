<template>
    <div class="home" >


<!--fixed没有进度条-->
        <div class="pull-height" :style="{backgroundImage:'url('+url+')'}" style="height: 80%;width:100%;background-size: 100% 100%;position: absolute ;left: 0px;right: 0px">
             <img src="../assets/plane.png" style="margin-top: 5%">
                <div style="font-size: xx-large">警察数数人流量云监管平台</div>
            <!--基于边缘计算的人流量云监管平台-->
            <el-button style="margin-top: 2%;font-size: medium" icon="el-icon-download" @click="download">点击下载</el-button>
            <div style="font-size: small;margin-top: 1%" >当前版本：v1.0 &emsp;|&emsp;系统支持：Android 5.0及以上&emsp;|&emsp;下载量：0</div>
            <el-button style="margin-top: 1%;font-size: medium " icon="el-icon-star-on" size="mini" @click="Star">Star 0</el-button>
        <el-button style="margin-top: 1%;font-size: medium " icon="el-icon-copy-document" size="mini" @click="Star">Fork 0</el-button>
        </div>
        <!--卡片-->
        <div style="position: absolute;left: 42%;top: 100%;" >


            <el-card class="box-card" style="position: absolute;left: -45%">
                <div slot="header" class="clearfix">
                <span style="font-size: x-large ;font-family: 黑体">人工智能</span>
                </div>
                <div class="text item">
                        &emsp;人工智能技术是当代最能改变人类生活方式的技术之一，随着以计算机视觉为代表的深度学习技术近些年的迅猛发展，越来越多的智能应用涌现，“警察数数”人流检测平台也由此而来。</div>
            </el-card>
             <el-card class="box-card" style="margin-left: -3%">
                <div slot="header" class="clearfix">
                <span style="font-size: x-large">边缘计算</span>
                </div>
                <div class="text item">
                        &emsp;随着万物互联的物联网技术的发展，越来越多的边缘端设备需要更多的计算资源以满足实时性的要求，传统的中心服务器将无法满足，由此，边缘计算将是未来物联网体系的核心竞争力所在。</div>
            </el-card>
            <el-card class="box-card" style="position:absolute ;left: 40%;top: 0%">
                <div slot="header" class="clearfix">
                <span style="font-size: x-large">开源社区</span>
                </div>
                <div class="text item">
                        &emsp;“一个人可以走得很快，但是一群人可以走得更远”，正是秉承着这种开源理念的广大程序员，才有了诸如Vue，TensorFlow这些优秀框架的出现，学术和工业届也因此而蒸蒸日上。</div>
            </el-card>
            <div style="position: absolute ;left: -6%;top: 150%">
                      <span>@2019 BJUT</span>
                      <el-divider direction="vertical"></el-divider>
                      <a src="">GitHub</a>
                      <el-divider direction="vertical"></el-divider>
                      <span>京ICP备XXXXXXXXX号-2</span>
            </div>
         </div>
  </div>

</template>
<script>
    import bg from '../assets/bg.jpg'
    export default {
        name: "home",
        data(){
            return {
            url: bg,
            }
        },
        methods:{
            Star(){
                alert("当前仓库状态为Private，您无法看见！等待比赛结束后会开源！");
                window.open('https://github.com/Chenbaocun?tab=repositories','_blank')
            },
            download(){
                window.open("/download/");
            }

        }
    }
</script>

<style>
  #home{
       min-width:1200px;
  }
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
    width: 30%;

  }

</style>
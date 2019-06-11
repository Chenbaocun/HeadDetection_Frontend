<!--# -*- coding: utf-8 -*- -->
<!--# @Time : 2019/5/29 18:27-->
<!--# @Author : Tom Chen-->
<!--# @Email : chenbaocun@emails.bjut.edu.cn-->
<!--# @File : real_time.py-->
<!--# @Software: PyCharm-->
<template>
       <div>
               <!--导航-->
   <el-row class="tac">
  <el-col :span="3">
    <el-menu router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-camera-solid"></i>
          <span>人流检测</span>
        </template>
        <el-menu-item-group>
          <template slot="title">监测数据</template>
          <el-menu-item index="real_time_count"><i class="el-icon-alarm-clock"></i>实时人流</el-menu-item>
          <el-menu-item index="abnormalImage"><i class="el-icon-picture-outline"></i>边缘端异常上传</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-trophy"></i>人流排行榜</el-menu-item>
            <el-menu-item index="online_user"><i class="el-icon-mobile-phone"></i>在线设备数据</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="数据分析">
          <el-menu-item index="1-3"><i class="el-icon-data-analysis"></i>人流历史统计</el-menu-item>
          <el-menu-item index="1-4"><i class="el-icon-pie-chart"></i>高危地点统计</el-menu-item>
          <el-menu-item index="1-4"><i class="el-icon-edit-outline"></i>监测建议</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
              <el-menu-item index="threshold"><i class="el-icon-odometer"></i>阈值设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span>关于</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="ECShardware"><i class="el-icon-cpu"></i>云服务器配置信息</el-menu-item>
          <el-menu-item index="platformIntroduce"><i class="el-icon-s-platform"></i>平台介绍</el-menu-item>
          <el-menu-item index="privacyStatement"><i class="el-icon-document"></i>隐私声明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
   <el-col :span="10" :offset="3">
            <transition name="fade" mode="out-in">
               <!--路由的组件将显示在这个位置-->
               <router-view></router-view>
            </transition>
   </el-col>
</el-row>
        </div>
</template>

<script>
    export default {
        name: "real_time",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
/*过渡动画css*/
.fade-enter{
  opacity: 0;
}

  .fade-enter-active{
    transition: opacity 0.5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition:opacity 0.5s ;
  }
</style>
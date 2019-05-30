<!--
# @Author: Tom Chen
# @Creation Date : 2019/3/26 0026 20:11  
# @Email:  chenbaocun@emails.bjut.edu.cn
# @File : community.vue
# @Software : PyCharm
-->
<!--template下边只能有一个element-->
<template>
    <div>
        <el-row class="tac">
  <el-col :span="3">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>个人中心</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="1-1"><i class="el-icon-upload2"></i>我上传的视频</el-menu-item>
          <el-menu-item index="1-1"><i class="el-icon-tickets"></i>计算结果</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-data-analysis"></i>
          <span>我的统计</span>
        </template>
        <el-menu-item-group>
              <el-menu-item index="1-1">我的上传</el-menu-item>
              <el-menu-item index="1-2">意见建议</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
    </div>
</template>

<script>
    export default {
        name: "community",
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

</style>
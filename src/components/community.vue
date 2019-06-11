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
    <el-menu router
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

          <el-menu-item index="myupload"><i class="el-icon-upload2"></i>我上传的视频</el-menu-item>
          <!--<el-menu-item index="result"><i class="el-icon-tickets"></i>计算结果</el-menu-item>-->
        </el-menu-item-group>
      </el-submenu>

        <el-menu-item index="advice"><i class="el-icon-message"></i>意见建议</el-menu-item>

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
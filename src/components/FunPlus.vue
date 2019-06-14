<!--
# @Author: Tom Chen
# @Creation Date : 2019/3/25 0025 20:03  
# @Email:  chenbaocun@emails.bjut.edu.cn
# @File : FunPlus.vue
# @Software : PyCharm
-->
<!--template下边只能有一个element-->
<template>
    <div id="FunPlus">
    <img src="../assets/fun1.gif">
     <div style="position: absolute;left: 60%">
    <el-button type="success" icon="el-icon-check" @click="open3">Like</el-button>
    <el-button type="info" icon="el-icon-close" @click="open3">Dislike</el-button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "FunPlus",
        methods:{
          open3() {
        this.$notify.info({
          title: '提醒',
          message: '待开发！'
        });
      },
        }
    }
</script>

<style scoped>

</style>
<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/9 12:20
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : threshold.py
# @Software: PyCharm
-->
<template>
    <div>
        <h1 v-loading="loading">{{threshold}}</h1>
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" style="margin-top: 10%">

  <el-form-item
    label="报警阈值"
    prop="threshold_update"
    :rules="[
      { required: true, message: '阈值不能为空'},
      { type: 'number', message: '阈值必须为数字'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.threshold_update" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交修改</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置输入</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
    export default {
        name: "threshold",
        data() {
      return {
         threshold:"加载中",
        numberValidateForm: {
          threshold_update: ''
        },
        number_input:'',
        loading:true
      }
    },
        mounted(){
        this.getThreshold()
    },
        methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getThreshold(){
          var _this=this;
          this.$ajax.post('/api/get_threshold/').then(function (response) {//这个请求不需要发送参数
                // console.log(response);
                if (response['data'] != "") {//这返回的不是null，而是""
                    this.threshold = "当前阈值为："+response['data'];
                    this.loading=false;
                    return true;
                }
                else {
                    this.threshold = "您还未设置过阈值";
                    this.loading=false;
                }
            }.bind(this))
                .catch(function (error) {
                    _this.open4(error);
                    return false;
                })
      },
      submitForm(formName){
          var _this=this;
                      this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('successfully submit!!');
                    this.$ajax.post('/api/set_threshold/', this.$qs.stringify({//必须用qs模块，把数据整合成类似get型 uri的形式
                        threshold_update: this.numberValidateForm.threshold_update,
                    }))
                        .then(function (response) {
                            if (response['data'] != "") {
                                  this.$notify({
                                    title: '成功',
                                    message: '您的修改已经在边缘端生效！',
                                    type: 'success'
                                    });
                                  this.getThreshold()
                            }
                            else {
                                this.open4("账号或者密码错误，请检查")
                            }
                        }.bind(this))
                        .catch(function (error) {
                            _this.open4(error)
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
      },
      open4(text) {
        this.$message.error(text);
        },
    }
    }
</script>

<style scoped>

</style>
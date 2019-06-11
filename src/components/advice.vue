<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/9 17:23
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : advice.py
# @Software: PyCharm
-->
<template>
    <div>
        <el-form :model="numberValidateForm1" ref="numberValidateForm1" label-width="100px" class="demo-ruleForm" style="margin-top: 10%">

  <el-form-item
    label="意见建议"
    prop="up_advice"
    :rules="[
      { required: true, message: '您不能提交空内容'},
    ]"
  >
    <el-input type="textarea" v-model.number="numberValidateForm1.up_advice" autocomplete="off" maxlength="200" show-word-limit style="height: 10%"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm1('numberValidateForm1')">提交</el-button>
    <el-button @click="resetForm1('numberValidateForm1')">重置输入</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
    export default {
        name: "advice",
        data(){
      return {
        numberValidateForm1: {
          up_advice: ''
             }
          }
        },
        methods: {
       resetForm1(formName) {
        this.$refs[formName].resetFields();
      },
       submitForm1(formName){
          var _this=this;
                      this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('successfully submit!!');
                    this.$ajax.post('/api/up_advice/', this.$qs.stringify({//必须用qs模块，把数据整合成类似get型 uri的形式
                        up_advice: this.numberValidateForm1.up_advice,
                    }))
                        .then(function (response) {
                            if (response['data'] != "") {
                                  this.$notify({
                                    title: '成功',
                                    message: '您的建议已经提交，感谢您的反馈',
                                    type: 'success'
                                    });
                                this.resetForm1('numberValidateForm1')
                            }
                            else {
                                this.$notify.error({
                                    title: '失败',
                                    message: '未知错误请稍后再试',
                                    });
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
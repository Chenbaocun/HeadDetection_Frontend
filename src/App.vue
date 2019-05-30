<!--最底层只拿他当个容器-->
<template>
  <div id="app">

   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
     <el-menu-item index="/" >
       <el-button type="text" style="font-family: 书体坊郭小语钢笔楷体 ;font-size: 30px;font-weight: 900" default-active>警察数数_φ(❐_❐✧</el-button>
     </el-menu-item>
       <el-menu-item index="/real-time" >发现</el-menu-item>
       <el-menu-item index="/abnormal">我的</el-menu-item>
       <el-menu-item index="/detection_util">检测工具</el-menu-item>
       <el-menu-item index="/FunPlus">Fun+</el-menu-item>
       <el-menu-item idnex="5" style="float: left;padding-left: 50px">
          <el-input v-model="input" placeholder="_φ(❐_❐✧ 人丑就要多读书" size="small" suffix-icon="el-icon-search" style="margin-right: 100px">
              <!--这个按钮暂时还不能点-->
          </el-input>
     </el-menu-item>
       <el-button type="primary" style="margin-top:15px;float: right;margin-right: 100px" size="small" @click="Login" v-if="LoninButtonVisible">登录</el-button>
       <!--用户名下拉菜单-->
       <el-dropdown style="margin-top:20px;float: right;margin-right: 5%" size="small" v-if="UserDropdownVisible" @command="handleCommand">
        <span class="el-dropdown-link">
            {{UsernameInDropdown}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>账号设置</el-dropdown-item>
          <el-dropdown-item>意见反馈</el-dropdown-item>
          <!--<el-dropdown-item disabled>★★★★★</el-dropdown-item>-->
          <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
       </el-dropdown>
   </el-menu>
         <!--<router-link to="/home">首页</router-link>-->
        <!--|<router-link to="/FunPlus">Fun+</router-link>-->
    <transition name="fade" mode="out-in">
    <!--路由的组件将显示在这个位置-->
    <router-view></router-view>
    </transition>
<!--Login框-->
   <el-dialog title="登录" :visible.sync="LoginFormVisible" width="350px" :close-on-click-modal="false"	>
     <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="账号" :label-width="formLabelWidth" prop="username">
                <el-input v-model="form.username" autocomplete="off" placeholder="手机号/邮箱/昵称" size="small"></el-input>
            </el-form-item>
             <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                 <el-input v-model="form.password" autocomplete="off" placeholder="密码" show-password size="small"></el-input>
            </el-form-item>
     </el-form>
       <!--注册Dialog-->
       <el-dialog width="500px" title="注册" :visible.sync="RegisterDialogVisible" append-to-body :close-on-click-modal="false">
            <el-form :model="form1" :rules="rules1" ref="form1" size="small">
                <el-form-item label="昵称" :label-width="formLabelWidth1" prop="username" >
                    <el-input v-model="form1.username" autocomplete="off" placeholder="这应该填一个中二的网名！(*^▽^*)" size="small" style="width: 70%;"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth1" prop="password" >
                     <el-input type="password" v-model="form1.password" autocomplete="off" size="small" style="width: 70%;" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth1" prop="checkpassword" >
                     <el-input type="password" v-model="form1.checkpassword" autocomplete="off" size="small"  style="width: 70%;"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth1" prop="gender">
                    <el-select v-model="form1.gender" placeholder="请选择性别" size="small" style="width: 70%;">
                        <el-option label="男" value="Male"></el-option>
                        <el-option label="女" value="Female"></el-option>
                        <el-option label="其他" value="Other"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" :label-width="formLabelWidth1" prop="birthDate">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form1.birthDate" size="small"  style="width: 70%;"
                    value-format="yyyy-MM-dd" ></el-date-picker>
                </el-form-item>
                <el-form-item label="最高学历" :label-width="formLabelWidth1" prop="eduDegree">
                    <el-select v-model="form1.eduDegree" placeholder="请选择您的最高学历" size="small" style="width: 70%;">
                        <el-option label="本科" value="Bachelor"></el-option>
                        <el-option label="硕士" value="Master"></el-option>
                        <el-option label="博士" value="Doctor"></el-option>
                        <el-option label="其他" value="Other"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth1" prop="email" >
                    <el-input v-model="form1.email" autocomplete="off" placeholder="请添加一个常用邮箱" size="small" style="width: 70%;"></el-input>
                </el-form-item>
                <el-form-item label="请至少为您自己添加1个标签（您的兴趣、研究方向、职业等）" prop="UserTags">
                    <br/>
                        <el-tag v-model="form1.UserTags"
                        :key="tag"
                        v-for="tag in form1.UserTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                        </el-tag>
                        <!--Tag 标签的width必须在这设置，不知道为什么对class设置的css不起作用-->
                        <el-input style="width: 90px"
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm">
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                </el-form-item>
            </el-form>
             <div slot="footer" class="dialog-footer">
                 <el-button @click="RegisterDialogVisible = false">取 消</el-button>
                 <el-button type="primary" @click="onSubmit2('form1')">注 册</el-button>
            </div>
       </el-dialog>
  <div slot="footer" class="dialog-footer">
    <el-button type="text" @click="RegisterDialogVisible=true">还没有账号？立即注册</el-button>
    <el-button @click="LoginFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
  </div>
  </el-dialog>


  </div>

</template>
<!--定义各类功能的集中入口-->
<script>
    import bg from './assets/a.jpg'
export default {
    name: 'app',
    //注册组件，在template中调用之前个必须先在这边注册
    components: {
        // home
    },
    props: {
        //默认这个属性不显示，可自行添加组件属性，这些属性只能由父组件提供
    },
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.form1.password) {
                callback(new Error('两次输入密码不一致!'));
            }
            else{
                callback();
            }
        };
        return {
            url :bg,
            msg: 'Paper Sharing ',
             activeIndex: '/',
            input: '',
            form:{
                username:'',
                password:'',
            },
            rules:{
                username:[
                     { required: true, message: '账号不能为空', trigger: 'blur' },
                    { min: 5, max: 12, message: '长度需在 5 到 15个字符', trigger: 'blur' }
                ],
                password:[
                     { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 5, max: 15, message: '长度需在 5 到 15个字符之间', trigger: 'blur' }
                ]
            },
            form1:{
                username:'',
                password:'',
                checkpassword:'',
                gender:'',
                birthDate:'',
                eduDegree:'',
                email:'',
                UserTags:['学生'],
            },
            rules1:{
                username:[
                     { required: true, message: '昵称不能为空', trigger: 'blur' },
                     { min: 5, max: 12, message: '长度需在 5 到 15个字符之间', trigger: 'blur' }
                ],
                password:[
                     { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 5, max: 15, message: '长度需在 5 到 15个字符之间', trigger: 'blur' }
                ],
                checkpassword:[
                     // { required: true, message: '密码不能为空', trigger: 'blur' },//这句会导致无法valid
                     { validator: validatePass2, trigger: 'blur' },
                    { min: 5, max: 15, message: '长度需在 5 到 15个字符之间', trigger: 'blur' }
                ],
                gender: [
                     { required: true, message: '请选择性别', trigger: 'change' }
                 ],
                birthDate: [
                     { required: true, message: '请选择出生日期', trigger: 'change' }
                 ],
                eduDegree: [
                     { required: true, message: '请选择最高学历', trigger: 'change' }
                 ],
                email:[
                     { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                     { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                 ],
                UserTags: [
                     { type:'array' ,required: true, message: '请至少为您自己添加一个标签，这将有助于提高您的使用体验', trigger: 'change' }
                 ],
            },
            LoginFormVisible: false,
            RegisterDialogVisible:false,
            formLabelWidth:'55px',
            formLabelWidth1:'100px',
            LoninButtonVisible:true,
            UserDropdownVisible:false,
            UsernameInDropdown:'',
            inputVisible: false,
            inputValue:''
        };
    },
    mounted(){
        this.Index()
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        Index() {
            this.$ajax.post('/api/Index/').then(function (response) {//这个请求不需要发送参数
                // console.log(response);
                if (response['data'] != "") {//这返回的不是null，而是""
                    this.LoninButtonVisible = false;
                    this.UserDropdownVisible = true;
                    this.UsernameInDropdown = response['data'];
                    return true;
                }
            }.bind(this))
                .catch(function (error) {
                    this.open4(error);
                    return false;
                })

        },
        Login() {
            this.LoginFormVisible = true;//用this可以访问
        },
        Logout(){
             this.$ajax.post('/api/Logout/').then(function (response) {//这个请求不需要发送参数
                // console.log(response);
                if (response['data'] != "") {//这返回的不是null，而是""
                    this.LoninButtonVisible = true;
                    this.UserDropdownVisible = false;
                    this.open2("注销成功");
                    return true;
                }
            }.bind(this))
                .catch(function (error) {
                    this.open4(error);
                    return false;
                })
        },
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('successfully submit!!');
                    this.$ajax.post('/api/login/', this.$qs.stringify({//必须用qs模块，把数据整合成类似get型 uri的形式
                        username: this.form.username,
                        password: this.form.password
                    }))
                        .then(function (response) {
                            if (response['data'] != "") {
                                this.LoginFormVisible = false;
                                this.LoninButtonVisible = false;
                                this.UserDropdownVisible = true;
                                this.UsernameInDropdown = response['data'];
                                this.open2("登陆成功")
                            }
                            else {
                                this.open4("账号或者密码错误，请检查")
                            }
                        }.bind(this))
                        .catch(function (error) {
                            this.open4(error)
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onSubmit2(formName){
             this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('successfully submit!!');
                    var register_data={
                        username:this.form1.username,
                        password:this.form1.checkpassword,
                        gender:this.form1.gender,
                        birthDate:this.form1.birthDate,
                        eduDegree:this.form1.eduDegree,
                        email:this.form1.email,
                        UserTags:JSON.stringify(this.form1.UserTags)//这个数组默认带有vue的observer
                    };
                     this.$ajax.post('/api/register/',this.$qs.stringify(register_data))
                        .then(function (response) {
                        if(response['data']!= ""){//0==""是正确的，千万注意，所以在后台返回值的时候，尽量避免返回0
                         if(response['data']==2){
                            this.open4("昵称已被别人注册了呢！ (•́へ•́╬)");
                             this.form1.username=''
                        }
                        else if(response['data']==1){
                            this.open2("注册成功┗( ▔, ▔ )┛");
                             this.RegisterDialogVisible=false;
                             this.form.username=this.form1.username;
                             this.form.password=this.form1.password;

                        }
                    }
                }.bind(this)).catch(function (error) {
                            this.open4(error)
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
     handleCommand(command) {
         if(command=="logout"){
            this.open1();
         }
      },
    open1() {
       this.$confirm('退出登录?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
               this.Logout()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '操作取消'
                });
            });
        },
    open2(text) {
        this.$message({
          message: text,
          type: 'success'
        });
      },
      open4(text) {
        this.$message.error(text);
        },
      //  about Tag
      handleClose(tag) {
        this.form1.UserTags.splice(this.form1.UserTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.form1.UserTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    //  封装axios,存在异步问题
      axios( url, data,callback){
            this.$ajax.post(url,this.$qs.stringify(data))
                .then(function (response) {
                    if(response['data']!= ""){//0==""是正确的，千万注意，所以在后台返回值的时候，尽量避免返回0
                        console.log(response['data']);
                        return response['data']
                    }
                }).catch(function (error) {
                            this.open4(error)
                        });
      },
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    /*这项可以保证在手机上也不会缩放*/
  margin-top: 0px;
  min-width:1200px;
}
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
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-caret-bottom {
    font-size: 15px;
  }
    /*标签*/
    .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

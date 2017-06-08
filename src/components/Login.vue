<template>
  <div class="page-login">
    <img src="../assets/logo.png" class="logo">
    <div class="box-input">
      <div class="phone-number underline-thin">
        <label>手机号 ：</label>
        <input type="" name="" maxlength="11" placeholder="请输入您的手机号">
      </div>
      <div class="password underline-thin">
        <label>密&nbsp;&nbsp;&nbsp;&nbsp;码 ：</label>
        <input v-if="!isShow" type='password' name="" placeholder="请输入您的密码" v-model="value">
        <input v-else type='text' name="" placeholder="请输入您的密码" v-model="value">
        <img src="../assets/password.png" v-tap="{methods:passwords}">
      </div>
      <p class="password-err">您输入的密码有误</p>
    </div>
    <a class="btn-red login" href="">登&nbsp;&nbsp;录</a>
    <div class="reminder">
      <a href="">忘记密码？</a> 
      <a href="" v-tap="{methods:goRegister}"><span>还没账号？</span>去注册</a>
    </div>
    <img class="slogan" src="../assets/slogan.png">
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        value: '',
        isShow: false// 是否显示密码
      }
    },
    components: {
      Group,
      Cell,
      Alert
    },
    ready () {
    },
    methods: {
      passwords () {
        if (this.isShow) {
          this.isShow = false
          return
        }
        this.isShow = true
      },
      goRegister () {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-login{
    width: 91.5%;
    text-align: center;
    margin: auto;
    margin-top: 1.32rem;   
  }
  .logo{
    width: 9.56rem;
  }
  .box-input{
    margin-top: 1.66rem;
    font-size: .56rem;
    text-align: left;
  }
  .box-input>div{
    height: 1.6rem;
    line-height: 1.6rem;
    padding-left: 0.28rem;
  }
  .box-input .password{
    margin-top: .52rem;
  }
  .password img{
    width: .8rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .password-err{
    color: #ff0000;
    font-size: 0.46rem;
    margin-left: 2.6rem;
    line-height: 1.22rem;
  }
  .login{
  	margin-top: .6rem;
  }
  .reminder{
    font-size: 0.56rem;
    line-height: 1.6rem;
    margin-top: .3rem;
    position: relative;
  }
  .reminder a{
    color: #f18900;
    position: absolute;
  }
  .reminder a:first-child{
    left: 0;
  }
  .reminder a:last-child{
    right: 0;
  }
  .reminder span{
    color: #999999;
  }
  .slogan{
    display: block;
    width: 11.7rem;
    position: absolute;
    bottom: 2.7rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

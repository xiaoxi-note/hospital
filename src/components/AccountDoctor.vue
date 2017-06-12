<template>
  <div class="page-orderInfo">
    <header>
      <div class="intro">
        <img src="../assets/doctor-head.png">
        <span>13366246300</span>
      </div>
    </header>
    <div class="content underline-thin">
      <ul>
        <li class="underline-thin">
          <span class="name left">实名认证</span>
          <span class="right">已认证</span>
        </li>
        <li class="underline-thin">
          <span class="audit left">医生资质审核</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin">
          <span class="change_pwd left">修改密码</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin">
          <span class="bind_tel left">手机绑定</span>
          <span class="right"></span>
        </li>
        <li>
          <span class="address left">收货地址</span>
          <span class="right">上海市青浦区徐泾东盈港东...</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert, Card } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        isClose: true
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      Card
    },
    ready () {
    },
    methods: {
      open () {
        this.isClose = false
      },
      close () {
        this.isClose = true
      },
      goOrder () {
        this.$router.push({
          name: 'order'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-orderInfo{   
  }
  header{
  	height: 4.38rem;
    background: #b60005 url(../assets/doctor-bg2.png) left bottom no-repeat;
    background-size: 100% auto;
    padding-top: .9rem;
    /*padding-bottom: 2rem;*/
    text-align: left;
  }
  header .intro{
    position: relative;
    width: 90%;
    margin: auto;
    box-sizing: border-box;
  }
  .intro{
    display: flex;
    align-items: center;
  }
  .intro img{
    width: 2.6rem;
    margin-right: .5rem;
  }
  .intro span{
    font-size: .68rem;
    color: #fff;
  }
  .content{
    background: #fff;
  }
  .content li{
    position: relative;
    width: 92.5%;
    margin: auto;
    height: 1rem;
    line-height: 1rem;
    font-size: .56rem;
    padding: .5rem 0;
  }
  .content li:before{
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .4rem;
    right: -.4rem;
    background: url(../assets/allIcon.png) no-repeat 0 -4rem;
    background-size: .8rem auto;
  }
  .content li .left{
    float: left;
    background: url(../assets/allIcon.png) no-repeat 0 -4.95rem;
    background-size: .8rem auto;
    padding-left: 1.36rem;
  }
  .content li .name{
  	background-position: 0 -3.24rem;
  }
  .content li .audit{
  	background-position: 0 -7.09rem;
  }
  .content li .change_pwd{
  	background-position: 0 -8.1rem;
  }
  .content li .bind_tel{
  	background-position: 0 -9.1rem;
  }
  .content li .address{
  	background-position: 0 -10.1rem;
  }
  .content li .right{
    float: right;
    padding-right: .76rem;
    color: #666;
  }
</style>

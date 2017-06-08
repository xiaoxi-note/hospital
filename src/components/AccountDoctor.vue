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
          <span class="left">实名认证</span>
          <span class="right">已认证</span>
        </li>
        <li class="underline-thin">
          <span class="left">医生资质审核</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin">
          <span class="left">修改密码</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin">
          <span class="left">手机绑定</span>
          <span class="right"></span>
        </li>
        <li>
          <span class="left">收货地址</span>
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
    background: #b60005 url(../assets/doctor-bg2.png) left bottom no-repeat;
    background-size: 100% auto;
    padding-top: 1rem;
    padding-bottom: 2rem;
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
    width: 4rem;
    margin-right: .5rem;
  }
  .intro span{
    font-size: 1.2rem;
    color: #fff;
  }
  .content{
    background: #fff;
  }
  .content li{
    position: relative;
    width: 90%;
    margin: auto;
    height: 3rem;
    line-height: 3rem;
  }
  .content li:before{
    content: '';
    width: 1rem;
    height: 3rem;
    position: absolute;
    right: 0;
    background: url(../assets/down.png) no-repeat;
    background-size: 1rem auto;
    background-position: center;
  }
  .content li .left{
    float: left;
    background: url(../assets/icon.png) no-repeat;
    background-size: 1rem auto;
    background-position: center left;
    padding-left: 1.5rem;
    color: #333;
    font-size: .8rem;
  }
  .content li .right{
    float: right;
    padding-right: 1.5rem;
    color: #666;
  }
</style>

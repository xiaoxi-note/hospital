<template>
  <div class="page-orderInfo">
    <header>
      <div class="doc-info">
        <div class="intro">
          <img src="../assets/doctor-head.png">
          <span class="name">王洪光</span>
          <i></i>
          <span class="type">国医大师</span>
        </div>
        <div class="message">
          <p>就诊医馆：北京国医馆</p>
          <p>就诊科室：内科</p>
          <p>就诊时间：2016年3月11日  周五  上午</p>
          <p>挂号费用：300元</p>
        </div>
        <div class="rule">
          <p>
            我已了解并同意以下规则
            <img src="../assets/down.png">
          </p>
        </div>
      </div>
    </header>
    <div class="content underline-thin">
      <ul>
        <li class="underline-thin">
          <span class="left">就诊人</span>
          <span class="right">王甜甜</span>
        </li>
        <li class="underline-thin">
          <span class="left">初/复诊</span>
          <span class="right">初诊</span>
        </li>
        <li class="underline-thin">
          <span class="left">疾病信息</span>
          <span class="right">尚未确诊</span>
        </li>
        <li>
          <span class="left">支付方式</span>
          <span class="right">会员卡</span>
        </li>
      </ul>
    </div>
    <a class="btn-submit">提&nbsp;交</a>
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
    /*background-color: #b60005;*/
    text-align: left;
    color: #fff;
    font-size: .8rem;
  }
  header .doc-info{
    background: url(../assets/doctor-bg.png) 0 0 no-repeat;
    background-size: 100% auto;
    /*background-position: -1px left;*/
    background-color: #b60005;
  }
  header .doc-info>div{
    position: relative;
    width: 90%;
    margin: auto;
    padding: .7rem;
    box-sizing: border-box;
  }
  header .doc-info>div:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5); 
  }
  header .doc-info>div:last-child:after{
    border-bottom: none;
  }
  .intro{
    display: flex;
    align-items: center;
  }
  .intro img{
    width: 3.5rem;
    margin-right: .5rem;
    padding: .3rem 0;
  }
  .intro .name{
    font-weight: bold;
    font-size: .9rem;
  }
  .intro i{
    width: 1px;
    height: 1rem;
    background: #fff;
    margin: 0 1rem;
    transform: scaleX(.5);
  }
  .rule p{
    color: #fdd005;
    position: relative;
  }
  .rule img{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
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
  }
  .content li .right{
    float: right;
    padding-right: 1.5rem;
  }
  .btn-submit{
    display: block;
    margin: auto;
    margin-top: 1.5rem;
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 2rem;
    background: #b60005;
    font-size: .9rem;
    color: #fff;
  }
</style>

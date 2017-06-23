<template>
  <div class="page-orderInfo">
    <header>
      <div class="doc-info">
        <div class="intro">
          <div class="headCont">
	    	    <span class="imgBg"></span>
	        <img src="../assets/doctor-head.png" class="head">
	      </div>
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
        <li class="underline-thin people">
          <span class="left">就诊人</span>
          <span class="right">王甜甜</span>
        </li>
        <li class="underline-thin review">
          <span class="left">初/复诊</span>
          <span class="right">初诊</span>
        </li>
        <li class="underline-thin info">
          <span class="left">疾病信息</span>
          <span class="right">尚未确诊</span>
        </li>
        <li class="pay-method">
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
  	padding-bottom: 1rem;
  }
  header{
    /*background-color: #b60005;*/
    text-align: left;
    color: #fff;
    font-size: .56rem;
    height: 10.44rem;
  }
  .doc-info-cont{
  	
  }
  header .doc-info{
    background: #b60005 url(../assets/doctor-bg.png) left top no-repeat;
    background-size: 100% auto;
    /*background-position: -1px left;*/
  }
  .headCont{
  	height: 2.44rem;
  	width: 2.44rem;
  	margin: 0;
  }
  header span.imgBg{
  	width: 2.44rem;
  	height: 2.44rem;
  	top: 0;
  }
  header img.head{
  	width: 2.08rem;
  	height: 2.08rem;
  	top: .2rem;
  	left: 1.2rem;
  }
  header .doc-info>div{
    position: relative;
    width: 90.6%;
    margin: auto;
    padding: .44rem 0;
    box-sizing: border-box;
    line-height: .96rem;
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
  header .doc-info div.intro{
    display: flex;
    align-items: center;
    padding: .72rem 0;
  }
  .intro .name{
    font-weight: bold;
    /*font-size: .9rem;*/
    padding: 0 0 0 .5rem;
  }
  .intro i{
    width: 1px;
    height: .7rem;
    background: #fff;
    margin: 0 .4rem;
    /*transform: scaleX(.5);*/
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
    width: .58rem;
  }
  .content{
    background: #fff;
  }
  .content li{
    position: relative;
    width: 90%;
    margin: auto;
    height: .8rem;
    line-height: .8rem;
  }
  .content li:before{
    content: '';
    width: .76rem;
    height: 1rem;
    position: absolute;
    right: 0;
    background: url(../assets/allIcon.png) no-repeat;
    background-size: .8rem auto;
    background-position: left -4.2rem;
  }
  .content li .left{
    float: left;
    background: url(../assets/allIcon.png) left top no-repeat;
    background-size: .8rem auto;
    padding-left: 1.3rem;
  }
  .content li.review  .left{
  	background-position: left -1.12rem
  }
  .content li.info  .left{
  	background-position: left -2.2rem
  }
  .content li.pay-method  .left{
  	background-position: left -3.2rem
  }
  .content li .right{
    float: right;
    padding-right: 1rem;
  }
  .btn-submit{
    display: block;
    margin: auto;
    margin-top: 1.5rem;
    width: 92.5%;
    height: 1.6rem;
    line-height: 1.6rem;
    border-radius: 1.8rem;
    background: #b60005;
    font-size: .64rem;
    color: #fff;
  }
</style>

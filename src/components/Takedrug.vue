<template>
  <div class="page-tiny">
    <div class="content underline-thin">
      <ul>
        <li v-for="item in list" class="underline-thin">
          <div class="intro">
            <p class="date">
              <span class="left">北京国医馆</span>
              <span class="right">2016-03-11</span>
            </p>
            <div class="clear"></div>
            <p class="person">
              <span class="left">内科 周红艳</span>
              <span class="right">就诊人：万甜甜</span>
            </p>
            <div class="clear"></div>
          </div>
          <div class="detail">
            <a class="left">查看详细药房</a>
            <span class="right"><span class="remove">-</span><span class="number">2</span><span class="add">+</span> 剂</span>
            <div class="clear"></div>
          </div>         
        </li>
      </ul>
    </div>
    <footer>
      <div class="agreement">
        <input type="checkbox" name="">
        <span>我已阅读并同意该协议</span> 
      </div>
      <a class="btn-submit">提&nbsp;交</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        list: [
          {},
          {},
          {}
        ]
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
      takeDrug () {
        this.$router.push({
          name: 'takedrug'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-tiny{  
    /*position: relative; */
  }
  .content{
    background: #fff;
  }
  .content li{
    width: 90%;
    margin: auto;
  }
  .content li.underline-thin:last-child:after{
    content: '';
    height: 0;
  }
  .content .intro{
    position: relative;
    width: 100%;
    padding: .5rem 0;
    margin: auto;
    color: #666;
    font-size: .7rem;
  }
  .content .intro:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5); 
  }
  .content .intro>p{
    margin-top: .5rem;
  }
  .content .intro .date span.left{
    font-size: .8rem;
    color: #333;
  }
  .content .intro .date span.right{
    color: #333;
  }
  .content .detail{
    position: relative;
    padding: .5rem 0;
    font-size: .8rem;
    color: #222;
  }
  .content .detail a{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: #00a0e9;
    font-size: .9rem;
  }
  .content .detail .remove,.content .detail .add{
    font-size: 1.2rem;
    font-weight: bold;
    color: #666;
  }
  .content .detail .number{
    position: relative;
    display: inline-block;
    padding: .2rem .5rem;
    margin: 0 .5rem;
    color: #00a0e9;
  }
  .content .detail .number:after{
    content: '';
    width: 3rem;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    transform: scale(.5);
    position: absolute;
    top: -0.8rem;
    left: -0.8rem;
  }
  footer{
    width: 100%;
    position: absolute;
    bottom: 2rem;
  }
  footer .agreement{
    position: relative;
    color: #999;
  }
  footer .agreement input{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  footer .agreement span{
    padding-left: 1rem;
  }
  footer .btn-submit{
    display: block;
    margin: auto;
    margin-top: .8rem;
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 2rem;
    background: #b60005;
    font-size: .9rem;
    color: #fff;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .clear{
    clear: both;
  }
</style>

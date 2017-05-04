<template>
  <div class="page-progress-detail">
    <ul>
      <li>
        <div class="left">
          <p class="date">2017-04-15</p>
          <p class="time">10:53</p>
        </div>
        <div class="center">
          <div class="circle"></div>
          <div class="line-grey"></div>
          <div class="line-red"></div>
        </div>
        <div class="right">
          <h2>成功提交药方</h2>
          <p class="intro">您已成功提交药方，请耐心等待</p>
        </div>
      </li>
      <li>
        <div class="left">
          <p class="date">2017-04-15</p>
          <p class="time">10:53</p>
        </div>
        <div class="center">
          <div class="circle"></div>
          <div class="line-grey"></div>
          <div class="line-red short"></div>
        </div>
        <div class="right">
          <h2>审核通过</h2>
          <p class="intro">您的审核已通过，请前往支付</p>
        </div>
      </li>
      <li class="unfinished">
        <div class="left">
          <p class="date">2017-04-15</p>
          <p class="time">10:53</p>
        </div>
        <div class="center">
          <div class="circle"></div>
          <div class="line-grey"></div>
          <div class="line-red hide"></div>
        </div>
        <div class="right">
          <h2>尚未支付</h2>
          <p class="intro hide">您已成功提交药方，请耐心等待</p>
          <a href="" class="pay">支付</a>
        </div>
      </li>
      <li class="unfinished">
        <div class="left">
          <p class="date">2017-04-15</p>
          <p class="time">10:53</p>
        </div>
        <div class="center">
          <div class="circle"></div>
        </div>
        <div class="right">
          <h2>尚未发药</h2>
          <p class="intro hide">您已成功提交药方，请耐心等待</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        
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
      
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-progress-detail{  
    position: relative; 
  }
  ul{
    margin-top: 2rem;
  }
  li{
    width: 90%;
    height: 7rem;
    margin: auto;
    position: relative;
  }
  li>div{
    float: left;
    text-align: left;
    height: 100%;
    position: relative;
  }
  .left{
    width: 4rem;
    color: #333;
    font-size: .7rem;
  }
  .center{
    width: 1rem;
    padding: 0 .5rem;
  }
  .center .circle{
    position: absolute;
    top: -3px;
    background: #b60005;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
  }
  .center .line-grey{
    position: absolute;
    height: 100%;
    width: 1px;
    background: #ccc;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  .center .line-red{
    position: absolute;
    height: 100%;
    width: 1px;
    background: #b60005;
    left: 50%;
    transform: translateX(-50%);
  }
  .center .line-red.short{
    height: 50%;
    top: .5rem;
  }
  .right h2{
    font-size: .8rem;
    color: #333;
    margin-top: -3px;
  }
  .right .intro{
    font-size: .7rem;
    color: #999999;
    margin-top: .5rem;
  }
  .hide{
    display: none;
  }
  .unfinished .circle{
    background: #ccc;
  }
  .unfinished h2{
    color: #999;
  }
  .unfinished .left{
    opacity: 0;
  }
  .pay{
    position: absolute;
    top: -3px;
    left: 4rem;
    width: 3.5rem;
    height: 1.3rem;
    border-radius: 1.3rem;
    background: #f39700;
    color: #fff;
    font-size: .8rem;
    text-align: center;
    display: table;
    vertical-align: middle;
  }
</style>

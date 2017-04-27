<template>
  <div class="page-tiny content">
    <ul>
      <li v-tap="{methods:takeDrug}">
        <span class="left">我要配方</span>
        <span class="right"></span>
      </li>
      <li>
        <span class="left">我要转方</span>
        <span class="right">已认证</span>
      </li>
      <li v-tap="{methods:searchProgress}">
        <span class="left">进度查询</span>
        <span class="right"></span>
      </li>
      <li>
        <span class="left">物流查询</span>
        <span class="right"></span>
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
        isClose: true
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
      },
      searchProgress () {
        this.$router.push({
          name: 'searchprogress'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-tyny{   
  }
  .content{
    position: relative;
    background: #fff;
  }
  .content:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    transform: scaleY(.5); 
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
  .content li:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
    transform: scaleY(.5); 
  }
  .content li:last-child:after{
    content: '';
    height: 0;
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
</style>

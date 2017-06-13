<template>
  <div class="page-tiny content underline-thin">
    <ul>
      <li v-tap="{methods:takeDrug}" class="underline-thin">
        <span class="formula left">我要配方</span>
        <span class="right"></span>
      </li>
      <li v-tap="{methods:changeDrug}" class="underline-thin">
        <span class="turn left">我要转方</span>
        <span class="right">已认证</span>
      </li>
      <li v-tap="{methods:searchProgress}" class="underline-thin">
        <span class="query_pro left">进度查询</span>
        <span class="right"></span>
      </li>
      <li v-tap="{methods:searchProgress}">
        <span class="query_logistics left">物流查询</span>
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
      },
      changeDrug () {
        this.$router.push({
          name: 'changedrug'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-tyny{   
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
    background: url(../assets/allIcon.png) no-repeat 0 -12.6rem;
    background-size: .8rem auto;
    padding-left: 1.36rem;
  }
  .content li .turn{
    background-position: 0 -13.6rem;
  }
  .content li .query_pro{
    background-position: 0 -14.55rem;
  }
  .content li .query_logistics{
  	background-position: 0 -15.5rem;
  }
  .content li .right{
    float: right;
    padding-right: 1rem;
    font-size: .48rem;
  }
</style>

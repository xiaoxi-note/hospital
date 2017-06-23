<template>
  <div class="content underline-thin">
    <ul>
      <li v-tap="{methods:sickCase}" class="underline-thin">
        <span class="left">病案管理</span>
        <span class="right"></span>
      </li>
      <li v-tap="{methods:completeDrug}" class="underline-thin">
        <span class="left">已开处方</span>
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
      sickCase () {
        this.$router.push({
          name: 'sickcase'
        })
      },
      completeDrug () {
        this.$router.push({
          name: 'completedrug'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .content{
    background: #fff;
  }
  ul{
  	position: relative;
  }
  ul:after{
  	content: '';
    width: 100%;
    height: 1px;
    background: #ccc;
    transform: scaleY(.5);
    position: absolute;
    bottom: 0;
    left: 0;
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
    background: url(../assets/allIcon.png) no-repeat 0 -5.1rem;
    background-size: .8rem auto;
    padding-left: 1.36rem;
  }
  .content li:last-child .left{
  	background-position: 0 -6.3rem;
  }
  .content li .right{
    float: right;
    padding-right: 1.36rem;
    font-size: .48rem;
  }
</style>

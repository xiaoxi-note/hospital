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
  .content li{
    position: relative;
    width: 90%;
    margin: auto;
    height: 3rem;
    line-height: 3rem;
    font-size: .8rem;
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
</style>

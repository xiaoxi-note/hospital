<template>
  <div class="page-tiny">
    <div class="content">
      <ul>
        <li v-for="item in list">
          <div class="intro">
            <p>
              <span>北京国医馆</span>
              <span>2016-03-11</span>
            </p>
            <p>
              <span>内科 周红艳</span>
              <span>就诊人：万甜甜</span>
            </p>
          </div>
          <div class="detail">
            <span>查看详细药房</span>
            <span>-<span>2</span>+ 剂</span>
          </div>
        </li>
    </ul>
    </div>
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
    /*height: 3rem;
    line-height: 3rem;*/
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
  .content .intro{
    position: relative;
    width: 100%;
    margin: auto;
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
</style>

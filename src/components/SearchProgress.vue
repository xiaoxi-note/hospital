<template>
  <div class="page-progress">
    <div class="content hospital-drug">
      <div class="title" v-tap="{methods:showHospitalList}">
        <span>医馆处方</span>
      </div>
      <ul v-show="hospitalDrugShow">
        <li v-for="item in hospitalDrug">
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
            <a class="left">处方</a>
            <a class="left" v-tap="{methods:goProgressDetail}">查看进度</a>
            <div class="clear"></div>
          </div>         
        </li>
      </ul>
    </div>
    <div class="content outer-drug">
      <div class="title" v-tap="{methods:showOuterList}">
        <span>外来出发</span>
      </div>
      <ul v-show="outerDrugShow">
        <li v-for="item in outerDrug">
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
            <a class="left">处方</a>
            <a class="left" v-tap="{methods:goProgressDetail}">查看进度</a>
            <div class="clear"></div>
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
        hospitalDrugShow: true,
        outerDrugShow: true,
        hospitalDrug: [
          {},
          {}
        ],
        outerDrug: [
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
      goProgressDetail () {
        this.$router.push({
          name: 'progressDetail'
        })
      },
      showHospitalList () {
        this.hospitalDrugShow = !this.hospitalDrugShow
      },
      showOuterList () {
        this.outerDrugShow = !this.outerDrugShow
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-progress{  
    position: relative; 
  }
  .content{
    background: #fff;
  }
  .hospital-drug{
    margin-bottom: 1rem;
  }
  .title{
    position: relative;
    padding: 1rem 5%;
    text-align: left;
    box-sizing: border-box;
  }
  .title:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    transform: scaleY(.5); 
  }
  .title:before{
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 5%;
    background: url(../assets/down.png) no-repeat;
    background-size: 1rem auto;
    background-position: center;
  }
  .title span{
    background: url(../assets/icon.png) no-repeat;
    background-size: 1rem auto;
    background-position: center left;
    padding-left: 1.5rem;
  }
  .content ul{
    position: relative;
    background: #fff;
  }
  .content ul:after{
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
  .intro{
    position: relative;
    width: 100%;
    padding: .5rem 0;
    margin: auto;
    color: #666;
    font-size: .7rem;
  }
  .intro:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5); 
  }
  .intro>p{
    margin-top: .5rem;
  }
  .intro .date span.left{
    font-size: .8rem;
    color: #333;
  }
  .intro .date span.right{
    color: #333;
  }
  .detail{
    position: relative;
    padding: .5rem 0;
    font-size: .8rem;
    color: #222;
  }
  .detail a{
    color: #00a0e9;
    font-size: .8rem;
    margin-right: 1rem;
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

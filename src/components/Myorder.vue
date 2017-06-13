<template>
  <div class="page-myorder">
    <tab defaultColor="#fff" active-color="#fff" :line-width="5" bar-active-color="#ed8083">
      <tab-item selected @on-item-click="onItemClick" class="all">全部</tab-item>
      <tab-item @on-item-click="onItemClick" class="ordered">已预约</tab-item>
      <tab-item @on-item-click="onItemClick" class="past">已过期</tab-item>
      <tab-item @on-item-click="onItemClick" class="wait">待处理</tab-item>
    </tab>
    <ul class="list">
      <li v-for="item in items" class="underline-thin">
        <div class="doctor-info">
          <flexbox align="center" justify="space-between" :gutter="8">
            <flexbox-item :span="1/5">
              <div class="flex-item left">
                <p class="date">3月20日</p>
                <p class="week">周四</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-item middle">
                <h2>邓文卓</h2>
                <p><span>主任医师</span><span>心内科</span></p>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/4">
              <div class="flex-item right">
                <div
                  class="btn-order"
                  v-if='item.type=="已预约"'
                  v-tap="{ methods: cancelOrder }"
                >取消预约</div>
                <div
                  class="btn-pay"
                  v-if='item.type=="待支付"'
                  v-tap="{ methods: goPay }"
                >支付</div>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="patient-info">
          <p class="left">就诊人：<span>万甜甜</span></p>
          <p class="right">修改</p>
        </div>
        <div class="status" :style="{ background: item.backgroudColor }">{{item.type}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert, Tab, TabItem, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        items: [
          { type: '已预约', backgroudColor: '#63c602' },
          { type: '已过期', backgroudColor: '#cccccc' },
          { type: '待支付', backgroudColor: '#ff6600' }
        ]
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem
    },
    ready () {
    },
    methods: {
      onItemClick () {
      },
      cancelOrder () {
      },
      goPay () {
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-myorder{
  	font-size: .5rem;
  }
  .vux-tab{
  	background: #b60005;
  }
  .vux-tab .vux-tab-item{
  	position: relative;
  	background-color: #b60005;
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
  	background-color: #db0006;
    z-index: 2;
  }
  .vux-tab .vux-tab-item.vux-tab-selected:after{
    right: 0;
  }
  .vux-tab .vux-tab-item{
    background: none;
  }
  .vux-tab-item:after{
  	content: "";
  	width: 1px;
    height: 1rem;
    background: #fff;
    transform: scaleX(.5);
    position: absolute;
    right: -1px;
    top: 50%;
    transform: scaleX(.5) translateY(-50%);
    z-index: 1;
  }
  .vux-tab-item.vux-tab-selected:after{
  	background: #db0006;
  }
  .vux-tab-item.item-last:after{
  	content: "";
  	width: 0;
  }
  .list li{
    background: #fff;
    overflow: hidden;
  }
  .list .doctor-info{
    position: relative;
    width: 92.5%;
    margin: auto;
    box-sizing: border-box;
    padding: .6rem 0;
    color: #666;
  }
  .list .doctor-info:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5);
  }
  .doctor-info .left{
    background: #eee;
    text-align: center;
    width: 2.36rem;
    height: 2.36rem;
  }
  .doctor-info .left .date{
    background: #ddd;
    height: .8rem;
    line-height: .8rem;
  }
  .doctor-info .left .week{
    line-height: 1.56rem;
    font-size: .56rem;
    font-weight: bold;
  }
  .doctor-info .middle h2{
    font-size: .56rem;
  }
  .doctor-info .right .btn-pay{
    width: 2.6rem;
    height: 1rem;
    line-height: 1rem;
    background: #f39700;
    text-align: center;
    border-radius: 1rem;
    color: #fff;
  }
  .patient-info{
    width: 92.5%;
    margin: auto;
    position: relative;
    height: 1.52rem;
    line-height: 1.52rem;
    color: #333;
  }
  .patient-info .left{
    position: absolute;
    left: 0;
  }
  .patient-info .right{
    position: absolute;
    right: 0;
    background: url(../assets/allIcon.png) no-repeat 0 -10.99rem;
    background-size: .8rem auto;
    padding-left: 0.9rem;
    color: #029fc6;
  }
  .status{
    position: absolute;
    top: 0.3rem;
    right: -2rem;
    width: 6rem;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    transform: rotate(45deg);
  }
  .underline-thin:before{
    content: '';
    width: 100%;
    height: 1px;
    background: #ccc;
    transform: scaleY(.5);
    position: absolute;
    top: 0;
    left: 0;
  }
  .underline-thin:first-child:before{
    display: none;
  }
  .underline-thin:after{
    display: none;
  }
  .underline-thin:last-child:after{
    display: block;
  }
</style>

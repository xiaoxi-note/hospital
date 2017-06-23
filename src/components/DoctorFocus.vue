<template>
  <div class="page-doctor-focus">
    <tab defaultColor="#fff" active-color="#fff" :line-width="5" bar-active-color="#ed8083">
      <tab-item selected @on-item-click="onItemClickOne">关注医生</tab-item>
      <tab-item @on-item-click="onItemClickTwo">就诊医生</tab-item>
    </tab>
    <ul class="doctor-focus underline-thin" v-show="doctorFocusShow">
      <li v-for="item in items" class="underline-thin">
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="14/69">
            <div class="flex-item left">
              <img src="../assets/doctor.png">
            </div>
          </flexbox-item>
          <flexbox-item :span="22/69">
            <div class="flex-item middle-left">
              <h2>邓文卓</h2>
              <p><span>主任医师</span><span>心内科</span></p>
            </div>
          </flexbox-item>
          <flexbox-item :span="11/69">
            <div class="flex-item middle-right">
              <div>
                <img src="../assets/heart.png">
                <p>加关注</p>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/5">
            <div class="flex-item right">
              <a class="btn-order">预约</a>
            </div>
          </flexbox-item>
        </flexbox>
      </li>
    </ul>
    <ul class="doctor-see underline-thin" v-show="!doctorFocusShow">
      <li v-for="item in items" class="underline-thin">
        <div class="doctor-info">
          <flexbox align="center" justify="space-between" :gutter="8">
            <flexbox-item :span="14/69">
              <div class="flex-item left">
              <img src="../assets/doctor.png">
            </div>
            </flexbox-item>
             <flexbox-item :span="25.5/69">
              <div class="flex-item middle">
                <h2>邓文卓</h2>
                <p><span>主任医师</span><span>心内科</span></p>
              </div>
            </flexbox-item>
            <flexbox-item :span="24/69">
              <div class="flex-item right">
                <a class="btn-order">预约</a>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="patient-info">
          <p>上次就诊时间：<span>2017-02-12</span></p>
        </div>
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
          {},
          {},
          {}
        ],
        doctorFocusShow: true
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
      onItemClickOne () {
        this.doctorFocusShow = true;
      },
      onItemClickTwo () {
        this.doctorFocusShow = false;
      },
      cancelOrder () {
      },
      goPay () {
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-doctor-focus{
  }
  .vux-tab{
  	height: 1.76rem;
  	background: #b60005;
  }
  .vux-tab .vux-tab-item{
  	background: none;
  	height: 1.76rem;
  	line-height: 1.76rem;
	font-size:.57rem  	
  }
  .vux-tab .vux-tab-ink-bar{
  	bottom: 0;
  }
  .vux-tab .vux-tab-item.vux-tab-selected{
  	background-color: #db0006;
  }
  .vux-tab-ink-bar{
    position: relative;
  }
  .vux-tab-ink-bar:after{
  	content: 'xxxxx';
    position: absolute;
    top: 0;
    left: 50%;
  	width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fdd005;
  }
  ul{
    background: #fff;
  }
  /*关注医生start*/
  .doctor-focus li,.doctor-see .doctor-info{
    overflow: hidden;
    width: 92.5%;
    margin: auto;
    padding: .52rem 0 .58rem;
  }
  .doctor-see .doctor-info{
  	width: 100%;
  }
  ul li.underline-thin:last-child:after{
    content: '';
    height: 0;
  }
  ul li .left{
    text-align: center;
    width: 2.2rem;
    height: 2.2rem;
  }
  ul li .left img{
    display: block;
    width: 100%;
    border-radius: 100%;
  }
  ul li .left .date{
    background: #ddd;
    height: 1rem;
    line-height: 1rem;
  }
  ul li .left .week{
    line-height: 2rem;
    font-size: .9rem;
    font-weight: bold;
  }
  .doctor-focus li .middle-left span,.vux-flexbox-item span{
  	font-size: .54rem;
  	color: #666;
  }
  .doctor-focus li .middle-left h2,.vux-flexbox-item h2{
    font-size: .62rem;
    color: #333;
    font-weight: 500;
  }
  .doctor-focus li .middle-left span:last-child,.vux-flexbox-item span:last-child{
  	padding-left: .34rem;
  }
  .doctor-focus li .middle-right{
    text-align: center;
  }
  .doctor-focus li .middle-right img{
    display: block;
    width: .72rem;
    height: .64rem;
    margin: auto;
  }
  .doctor-focus li .middle-right p{
    color: #f39700;
    font-size: .56rem;
  }
  ul li .right .btn-order{
    display: table;
    width: 2.6rem;
    height: 1rem;
    line-height: 1rem;
    background: #f39700;
    text-align: center;
    border-radius: 1.2rem;
    color: #fff;
    font-size: .56rem;
    float: right;
  }
  /*关注医生end*/
  /*就诊医生start*/
  .doctor-see li{
    position: relative;
    overflow: hidden;
    width: 92.5%;
    margin: auto;
  }
  .patient-info{
    position: relative;
    height: 1.4rem;
    line-height: 1.4rem;
    color: #333;
    font-size: .54rem;
  }
  .patient-info:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px dashed #eee;
    transform: scaleY(.5); 
  }
  .patient-info p{
    text-align: left;
  }
  /*就诊医生end*/
</style>

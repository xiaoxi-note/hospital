<template>
  <div class="page-order">
    <header>
      <card>
        <div slot="content" class="card-demo-flex">
          <div class="vux-1px-r" :class="{active : isActive}">全科</div>
          <div class="vux-1px-r">盛实国医</div>
          <div class="">3月28</div>
        </div>
      </card>
      <div class="option subject" :class="{active : isActive}">
        <ul>
          <li>内科</li>
          <li>妇科</li>
          <li>肿瘤科</li>
        </ul>
      </div>
      <div class="option">
        <ul>
          <li>xxxxx</li>
          <li>妇科</li>
          <li>肿瘤科</li>
        </ul>
      </div>
      <div class="option">
        <ul>
          <li>aaaaa</li>
          <li>妇科</li>
          <li>肿瘤科</li>
        </ul>
      </div>
    </header>
    <div class="search-box">
      <div class="inner">
        <select>
          <option>北京</option>
          <option>上海</option>
        </select>
        <div class="search-input">
          <i></i>
          <input type="" name="" placeholder="搜索医生姓名">
        </div>
      </div>
    </div>
    <ul class="doctor-list">
      <li v-for="item in doctorList">
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="1/5">
            <div class="flex-item left">
              <img src="../assets/doctor.png">
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-item middle">
              <h2>邓文卓</h2>
              <p>
                <span>主任医师</span>
                <span>心内科</span>
              </p>
              <p>首都医科大学附属医院</p>
              <p>
                <span>剩余费：</span>
                <span class="rest-order" :style="{ color: item.color }">2</span>
                <span>挂号费：</span>
                <span class="" :style="{ color: item.color }">￥126</span>
              </p>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/5">
            <div class="flex-item right">
              <div class="btn-order" :style="{ background: item.backgroundColor }">预约</div>
            </div>
          </flexbox-item>
        </flexbox>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert, Card, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        isActive: false,
        doctorList: [
          { type: 1, backgroundColor: '#f39700', color: '#f39700' },
          { type: 0, backgroundColor: '#cccccc', color: '#666' }
        ]
      }
    },
    computed: {
    },
    components: {
      Group,
      Cell,
      Alert,
      Card,
      Flexbox,
      FlexboxItem
    },
    ready () {
    },
    methods: {
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-order{
    height: 100%;
  }
  header{
    position: relative;
  }
  .card-demo-flex {
    display: flex;
    color: #fff;
    background: #990005;
    padding: 0 .5rem;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    height: 3rem;
    line-height: 3rem;
  }
  .card-demo-flex>div>span {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .weui-panel:before{
    border: none;
  }
  .vux-1px-r{
    position: relative;
  }
  .vux-1px-r:after {
    content: " ";
    height: 1rem;
    position: absolute;
    right: 0;
    top: 50%;
    width: 1px;
    border-right: 1px solid #fff;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    transform: translateY(-50%);
  }
  .option{
    display: none;
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .option li{
    width: 90%;
    height: 3rem;
    line-height: 3rem;
    margin: auto;
    border-bottom: 1px solid #ccc;
    font-size: .9rem;
    color: #666;
  }
  .option li:last-child{
    border: none;
  }
  .search-box{
    position: relative;
    width: 100%;
    background: #fff;
  }
  .search-box:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }
  .search-box .inner{
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    margin: auto;
    position: relative;
  }
  .search-box select{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .search-box .search-input{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f7f7f7;
    width: 13rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 1.5rem;
    text-align: left;
  }
  .search-box .search-input i{
    position: absolute;
    left: .5rem;
    width: 1rem;
    height: 1.5rem;
    background: url(../assets/icon.png) no-repeat; 
    background-size: 1rem auto;
    background-position: center;
  }
  .search-box .search-input input{
    background:none;  
    outline:none;  
    border:0px;
    margin-left: 2rem;
  }
  .doctor-list{
    position: relative;
    clear: both;
    background: #fff;
  }
  .doctor-list:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }
  .doctor-list li{
    position: relative;
    width: 90%;
    margin: auto;
    padding: 1.5rem 0;
  }
  .doctor-list li:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }
  .doctor-list li:last-child:after{
    content: '';
    height: 0;
  }
  .doctor-list .flex-item {
    text-align: center;
    color: #fff;
  }
  .doctor-list .flex-item.middle {
    text-align: left;
  }
  .doctor-list .flex-item h2{
    color: #333;
    font-size: .8rem;
    line-height: 1.8;
  }
  .doctor-list .flex-item>p{
    color: #666;
    line-height: 1.8;
  }
  .doctor-list .flex-item .btn-order{
    width: 4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
    font-size: .9rem;
    border-radius: 1.5rem;
    float: right;
  }
  .doctor-list .flex-item.left img{
    width: 3rem;
    float: left;
  }
  .doctor-list .flex-item .rest-order{
    padding-right: .5rem;
  }
</style>

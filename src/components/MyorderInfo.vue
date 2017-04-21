<template>
  <div class="page-myorderinfo">
    <div class="search-box">
      <div class="inner">
        <select>
          <option>按时间</option>
          <option>按区域</option>
        </select>
        <div class="search-input">
          <i></i>
          <input type="" name="" placeholder="搜索医生姓名">
        </div>
      </div>
    </div>
    <ul class="order-list">
      <li v-for="itme in orderList">
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="1/5">
            <div class="flex-item left">
              <p class="date">3月20日</p>
              <p class="week">周四</p>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-item right">
              <p><span>就诊人：</span><span>王甜甜</span></p>
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
        orderList: [
          {},
          {},
          {}
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
  /*搜索框start*/
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
  /*搜索框end*/
  /*列表start*/
  .order-list{
    position: relative;
    background: #fff;
  }
  .order-list:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }
  .order-list li{
    position: relative;
    width: 90%;
    margin: auto;
    box-sizing: border-box;
    padding: 1rem 0;
    color: #666;
  }
  .order-list li:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }
  .order-list li:last-child:after{
    content: '';
    height: 0;
  }
  .order-list .left{
    background: #eee;
    text-align: center;
    width: 3rem;
    height: 3rem;
  }
  .order-list .left .date{
    background: #ddd;
    height: 1rem;
    line-height: 1rem;
  }
  .order-list .left .week{
    line-height: 2rem;
    font-size: .9rem;
    font-weight: bold;
  }
  .order-list .middle p{
    font-size: .9rem;
    color: #333;
  }
  /*列表end*/
</style>

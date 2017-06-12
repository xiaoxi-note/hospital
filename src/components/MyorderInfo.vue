<template>
  <div class="page-myorderinfo">
    <div class="search-box underline-thin">
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
    <ul class="order-list underline-thin">
      <li v-for="itme in orderList" class="underline-thin">
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
    width: 100%;
    background: #fff;
    font-size: .56rem;
  }
  .search-box .inner{
    width: 90%;
    height: 1.8rem;
    line-height: 1.8rem;
    margin: auto;
    position: relative;
  }
  .search-box select{
    position: absolute;
    width: 2.3rem;
    left: 0;
    top: 50%;
    font-size: .56rem;
    appearance:none;
	-moz-appearance:none;
	-webkit-appearance:none;
    transform: translateY(-50%);
    outline: none;
    border: none;
    background: url(../assets/downMis.png) no-repeat right center;
    background-size: .4rem auto;
  }
  .search-box select option{
  	border: none;
  }
  .search-box .search-input{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f7f7f7;
    width: 11rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 1.2rem;
    text-align: left;
    margin-left: .4rem;
  }
  .search-box .search-input i{
    position: absolute;
    left: .44rem;
    width: .68rem;
    height: .68rem;
    top: .28rem;
    background: url(../assets/searchBtn.png) no-repeat; 
    background-size: .68rem auto;
    background-position: center;
  }
  .search-box .search-input input{
    background:none;  
    outline:none;  
    border:0px;
    margin-left: 1.44rem;
    font-size: .56rem;
  }
  /*搜索框end*/
  /*列表start*/
  .order-list{
    background: #fff;
    font-size: .56rem;
  }
  .order-list li{
    width: 92.5%;
    margin: auto;
    box-sizing: border-box;
    padding: .5rem 0;
    color: #666;
  }
  .order-list li.underline-thin:last-child:after{
    content: '';
    height: 0;
  }
  .order-list .left{
    background: #eee;
    text-align: center;
    width: 2.36rem;
    height: 2.36rem;
  }
  .order-list .left .date{
    background: #ddd;
    height: .8rem;
    line-height: .8rem;
  }
  .order-list .left .week{
    line-height: 1.56rem;
    font-size: .56rem;
    font-weight: bold;
  }
  .order-list .middle p{
    font-size: .9rem;
    color: #333;
  }
  .vux-flexbox .vux-flexbox-item p{
  	color: #333;
  }
  /*列表end*/
</style>

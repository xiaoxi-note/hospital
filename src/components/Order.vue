<template>
  <div class="page-order">
    <header>
      <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-r">全科</div>
            <div class="vux-1px-r">盛世国医</div>
            <div class="">3月28</div>
          </div>
        </card>
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
    <ul>
      <li>
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="1/5">
            <div class="flex-item left">
              <img src="../assets/doctor.png">
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-item middle">
              <h2>邓文卓</h2>
              <p><span>主任医师</span><span>心内科</span></p>
              <p>首都医科大学附属医院</p>
              <p><span>剩余费：</span><span class="orange rest-order">2</span><span>挂号费：</span><span class="orange">￥126</span></p>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/5">
            <div class="flex-item right">
              <div class="btn-order">预约</div>
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
      }
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
  .orange{
    color: #f39700;
  }
  .page-order{
  }
  .card-demo-flex {
    display: flex;
    color: #fff;
    background: #990005;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
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
  .search-box{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ccc;
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
  ul{
    clear: both;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  ul li{
    /*height: 10rem;*/
    width: 90%;
    margin: auto;
    padding: 1.5rem 0;
    border-bottom: 1px solid #ccc;
  }
  ul li:last-child{
    border: none;
  }
  ul .flex-item {
    text-align: center;
    color: #fff;
    /*background-clip: padding-box;*/
  }
  ul .flex-item.middle {
    text-align: left;
  }
  ul .flex-item h2{
    color: #333;
    font-size: .8rem;
    line-height: 1.8;
  }
  ul .flex-item>p{
    color: #666;
    line-height: 1.8;
  }
  ul .flex-item .btn-order{
    width: 4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
    font-size: .9rem;
    border-radius: 1.5rem;
    background: #f39700;
    float: right;
  }
  ul .flex-item.left img{
    width: 3rem;
    float: left;
  }
  ul .flex-item .rest-order{
    padding-right: 1rem;
  }
</style>

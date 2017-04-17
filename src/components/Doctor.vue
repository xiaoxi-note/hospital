<template>
  <div class="page-doctor">
    <header>
      <img src="../assets/doctor-head.png" class="head">
      <p class="name">王洪刚</p>
      <p class="type">国医大师</p>
      <div class="info">
        <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-l vux-1px-r">
              <span>234</span>
              <br/>
              剩余号
            </div>
            <div class="vux-1px-r">
              <span>500</span>
              <br/>
              问诊量
            </div>
            <div>
              <span>213</span>
              <br/>
              关注
            </div>
          </div>
        </card>
      </div>
    </header>
    <div class="content">
      <ul>
        <li>
          <div>
            <img src="../assets/icon.png">
            <span>执业点</span>
          </div>
          <p>天津国医馆--内科</p>
        </li>
        <li>
          <div>
            <img src="../assets/icon.png">
            <span>擅长</span>
          </div>
          <p>食管、胃疾病的中西医结合诊治</p>
        </li>
        <li>
          <div>
            <img src="../assets/icon.png">
            <span>执业点</span>
            <span>展开</span>
          </div>
          <p>毕业于天津医科大学，师从著名医生著名解...</p>
        </li>
      </ul>
    </div>
    <footer>
      <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-r">
              <img src="../assets/icon.png">
              <span>关注</span>
            </div>
            <div>
              <img src="../assets/icon.png">
              <span>预约挂号</span>
            </div>
          </div>
        </card>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert, Card } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        value: ''
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      Card
    },
    ready () {
    },
    methods: {
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-doctor{   
  }
  header{
    position: relative;
    height: 12rem;
    background: url('../assets/doctor-bg.png') 0 0 no-repeat;
    background-size: 100% auto;
  }
  header img.head{
    width: 4rem;
    margin-top: 1rem;
  }
  header .name{
    color: #fff;
    font-size: 1rem;
  }
  header .type{
    color: #fff;
    font-size: 0.7rem;
  }
  header .info{
    width: 100%;
    height: 3rem;
    background: #990005;
    position: absolute;
    bottom: 0;
  }
  header .info>div{
    background: #990005;
  }
  .card-demo-flex {
    display: flex;
    color: #fff;
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
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  footer .card-demo-flex>div>img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
  }
  footer .card-demo-flex>div>span {
    color: #333333;
    font-weight: normal;
    font-size: 1rem;
    display: inline-block;
    margin-left: 1.5rem;
  }
  footer .vux-1px-r:after {
    height: auto;
    border-right: 1px solid #dddddd;
    top: 0;
    bottom: 0;
    transform: translateY(0);
  }
</style>

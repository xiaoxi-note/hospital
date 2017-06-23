<template>
  <div class="page-doctor">
    <header>
      <div class="headCont">
    	    <span class="imgBg"></span>
        <img src="../assets/doctor-head.png" class="head">
      </div>
      <p class="name">王洪刚</p>
      <p class="type">国医大师</p>
      <div class="info">
        <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-l vux-1px-r">
              <span>234</span>
              <p>剩余号</p>
            </div>
            <div class="vux-1px-r">
              <span>500</span>
              <p>问诊量</p>
            </div>
            <div>
              <span>213</span>
              <p>关注</p>
            </div>
          </div>
        </card>
      </div>
    </header>
    <ul class="content underline-thin">
      <li class="underline-thin">
        <p class="area">执业点</p>
        <p>天津国医馆--内科</p>
      </li>
      <li class="underline-thin">
        <p class="skill">擅长</p>
        <p>食管、胃疾病的中西医结合诊治</p>
      </li>
      <li>
        <p class="intro">
          <span>简介</span>
          <span v-if="isClose" v-tap="{methods:open}" class="drop">展开</span>
          <span v-else v-tap="{methods:close}" class="drop">收起</span>
        </p>
        <p v-if="isClose">毕业于天津医科大学，师从著名医生著名解...</p>
        <p v-else>毕业于天津医科大学，师从著名医生著名解,毕业于天津医科大学，师从著名医生著名解,毕业于天津医科大学，师从著名医生著名解</p>
      </li>
    </ul>
    <footer>
      <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-r">
              <img src="../assets/heart2.png">
              <span>关注</span>
            </div>
            <div v-tap="{methods:goOrder}">
              <img src="../assets/yellowClock.png">
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
        isClose: true
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
      open () {
        this.isClose = false
      },
      close () {
        this.isClose = true
      },
      goOrder () {
        this.$router.push({
          name: 'order'
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-doctor{   
  }
  .card-demo-flex {
    display: flex;
    color: #fff;
    background: #990005;
  }
  .card-demo-content01 {
    padding: .3rem 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: .48rem;
  }
  .card-demo-flex>div>span {
    font-size: .7rem;
    font-weight: 800;
  }
  .weui-panel:before{
    border: none;
  }
  .vux-1px-r{
    position: relative;
  }
  .vux-1px-r:after {
    content: " ";
    height: .6rem;
    position: absolute;
    right: 0;
    top: 50%;
    width: 1px;
    border-right: 1px solid #fff;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    transform: translateY(-50%) scaleX(0.5);
  }
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  footer .card-demo-flex{
    background: #fff;
  }
  footer .card-demo-flex>div>img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: .76rem;
  }
  footer .card-demo-flex>div>span {
    color: #333333;
    font-weight: normal;
    font-size: .56rem;
    display: inline-block;
    margin-left: 1.2rem;
  }
  footer .vux-1px-r:after {
  	height: .96rem;
    border-right: 1px solid #dddddd;
  }
  footer .card-demo-content01{
  	padding: .5rem 0;
  }
</style>

<template>
  <div class="page-doctor">
    <header>
      <div class="headCont">
    	    <span class="imgBg"></span>
        <img src="../assets/doctor-head.png" class="head">
      </div>
      <p class="name">王洪刚</p>
      <p class="type">国医大师</p>
      <p class="room">产科 — 病房（产科）</p>
    </header>
    <ul class="content underline-thin">
      <li class="underline-thin">
        <div class="area">
          出诊时间
        </div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td><span>3.26</span><br/><span>周一</span></td>
              <td><span>3.27</span><br/><span>周二</span></td>
              <td><span>3.28</span><br/><span>周三</span></td>
              <td><span>3.29</span><br/><span>周四</span></td>
              <td><span>3.30</span><br/><span>周五</span></td>
            </tr>
            <tr>
              <td>上</td>
              <td :class="isFull ? canNotChois : 'canNotChois'">约满</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>下</td>
              <td></td>
              <td :class="isFull ? '' : canChois"><span>预约</span><br/><span>剩余：21</span></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>晚</td>
              <td></td>
              <td></td>
              <td :class="isFull ? '' : canChois"><span>预约</span><br/><span>剩余：15</span></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li class="underline-thin">
        <div class="skill">
          擅长
        </div>
        <p>食管、胃疾病的中西医结合诊治</p>
      </li>
      <li class="underline-thin">
        <div class="intro">
          <span>简介</span>
          <span v-if="isClose" v-tap="{methods:open}" class="drop">展开</span>
          <span v-else v-tap="{methods:close}" class="drop">收起</span>
        </div>
        <p v-if="isClose">毕业于天津医科大学，师从著名医生著名解...</p>
        <p v-else>毕业于天津医科大学，师从著名医生著名解,毕业于天津医科大学，师从著名医生著名解,毕业于天津医科大学，师从著名医生著名解</p>
      </li>
    </ul>
    <footer>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert, Card } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        isClose: true,
        isFull: false,
        canNotChois: 'canNotChois',
        canChois: 'canChois'
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
  .content{
    background: #fff;
  }
  table{
    position: relative;
    width: 100%;
    margin: .5rem 0;
    border-collapse: collapse;
    table-layout: fixed;
  }
  table:before{
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    border: 1px solid #ff0007;
    transform: scale(.5);
    top: -50%;
    left: -50%;
    margin-top: -1px;
    margin-left: -1px;
  }
  table td{
    position: relative;
    height: 1.6rem;
    text-align: center;
    font-size: .52rem;
  }
  table td:before{
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: scale(.5);
    top: -50%;
    left: -50%;
    margin-left: -1px;
    margin-top: -1px;
  }
  table tr:first-child td:fitst-child{
    color: #222;
  }
  table tr:first-child td span:fitst-child{
    font-size: .8rem;
  }
  table tr:first-child td span:last-child{
    font-size: .38rem;
    color: #999;
  }
  table tr:last-child td:before{
    content: '';
    border-bottom: none;
  }
  table tr td:last-child:before{
    content: '';
    border-right: none;
  }
  table tr td:first-child{
    width: 1.66rem;
    color: #222;
    font-size: .44rem;
  }
  td.canNotChois{
    background: #eee;
    color: #999;
  }
  td.canChois{
    background: #f39700;
    color: #fff;
  }
  td.canChois span:first-child{
    font-size: .56rem;
  }
  td.canChois span:last-child{
    font-size: .4rem;
  }
</style>

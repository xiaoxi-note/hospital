<template>
  <div class="page-complete-drug">
    <ul class="underline-thin">
      <li v-for="item in items" class="underline-thin">
        <div class="sick-person">
          就诊人：<span>周艳艳</span>
        </div>
        <div class="money">
          金额：<span>2000</span>元
        </div>
        <a>处方详情</a>
      </li>
    </ul>
    <footer>
      <div>
        金额总计
        <span>￥10000.00</span>
      </div>
    </footer>
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
      goPay () {
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-complete-drug{
  }
  ul{
    background: #fff;
  }
  ul li{
    width: 90%;
    margin: auto;
    padding: 1rem 0;
  }
  ul li.underline-thin:last-child:after{
    content: '';
    height: 0;
  }
  li .sick-person{
    background: url(../assets/icon.png) no-repeat;
    background-size: 1rem auto;
    background-position: center left;
    padding-left: 1.5rem;
    text-align: left;
    font-size: .9rem;
  }
  li .money{
    text-align: right;
    padding: .3rem 0;
  }
  li a{
    display: block;
    font-size: .9rem;
    color: #00a0e9;
    text-align: left;
  }
  footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: .9rem;
  }
  footer>div{
    width: 90%;
    margin: auto;
    padding: 1.3rem 0;
    position: relative;
    text-align: left;
  }
  footer span{
    position: absolute;
    right: 0;
  }
</style>

<template>
  <div class="page-progress-detail">
    <ul>
      <li v-for="(item,index) in statusArray"
          :class="{unfinished:index == status-1}"
          v-if="index <status"
      >
        <div class="left">
          <p class="date" v-if="index==0||index<status-1">{{(new Date(time)).format('yyyy.MM.dd')}}</p>
          <p class="time" v-if="index==0||index<status-1">{{(new Date(time)).format('hh:mm')}}</p>
        </div>
        <div class="center">
          <div class="circle">
            <img src="../assets/icon2.png">
          </div>
          <div class="line-grey"></div>
          <div class="line-red"></div>
        </div>
        <div class="right">
          <h2 v-if="index == status-1">{{item.now.text}}</h2>
          <h2 v-if="index < status-1">{{item.pre.text}}</h2>
          <p class="intro">{{item.desc}}</p>
          <a href="" class="pay" v-if="item.key == 'pay'">支付</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  import {mapGetters} from 'vuex'
  import {GETDRUGINFO} from '../store/type'
  import {Group, Cell, Alert} from 'vux'

  export default {
    name      : 'NAME',
    data () {
      var statusArray = [
        {
          now    : {
            text: '成功提交药方，请等待审核',
          },
          pre    : {
            text: '成功提交药方',
          },
          key    : 'img-commit',
          timeKey: 'commit'
        },
        {
          now    : {
            text: '审核通过，请等待划价',
          },
          pre    : {
            text: '审核通过',
          },
          reject : {
            text: '审核不通过',
          },
          key    : 'preview',
          timeKey: 'preview'
        },
        {
          now    : {
            text: '已划价，请支付',
          },
          pre    : {
            text: '已支付',
          },
          key    : 'pay',
          timeKey: 'pay'
        },
        {
          now    : {
            text: '药方处理中',
          },
          pre    : {
            text: '药方已发药',
          },
          key    : 'drug-control',
          timeKey: 'sendTime'
        },
        {
          now    : {
            text: '等待用户收药',
          },
          pre    : {
            text: '用户已收药，本单完成',
          },
          key    : 'end',
          timeKey: 'endTime'
        },
      ]
      return {
        statusArray: statusArray,
        status     : 3,
        time       : '2017-07-30 19:09:45'
      }
    },
    computed  : {
      ...mapGetters([
        'getDrugInfo'
      ])
    },
    components: {
      Group,
      Cell,
      Alert
    },
    created () {
//      this.$store.dispatch(GETDRUGINFO, {
//        id: this.$route.query.id
//      })
    },
    methods   : {},
    watch     : {
      getDrugInfo (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.doctorInfoList = respose.data
//            this.showData       = this.doctorInfoList
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      },
    },
    methods   : {
      getStatus (){

      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-progress-detail {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff url(../assets/bg.png) left bottom no-repeat;
    background-size: 29% auto;
  }

  .page-progress-detail ul {
    margin-top: 2rem;
  }

  .page-progress-detail li {
    width: 92.5%;
    height: 4.96rem;
    margin: auto;
    position: relative;
    display: flex;
  }

  .page-progress-detail li > div {
    float: left;
    text-align: left;
    height: 100%;
    position: relative;
  }

  .page-progress-detail li.active > div {
    color: #00a0e9;
  }

  .page-progress-detail .left {
    width: 2.66rem;
    color: #333;
    font-size: .48rem;
  }

  .page-progress-detail .center {
    width: .96rem;
    padding: 0 .5rem;
  }

  .page-progress-detail .center .circle {
    position: absolute;
    top: -3px;
    background: #12e900;
    width: .96rem;
    height: .96rem;
    border-radius: .96rem;
    z-index: 3;
  }


  .page-progress-detail .center .circle img {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 3;
  }

  .page-progress-detail .center .line-grey {
    position: absolute;
    height: 100%;
    width: 1px;
    background: #ccc;
    left: 50%;
    transform: translateX(-50%);
  }

  .page-progress-detail .center .line-red {
    position: absolute;
    height: 100%;
    width: 1px;
    background: #12e900;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .page-progress-detail .center .line-red.short {
    height: 50%;
    top: .5rem;
  }

  .page-progress-detail .right h2 {
    font-size: .6rem;
    color: #333;
    line-height: 1.08rem;
    margin-top: -3px;
  }

  .page-progress-detail li.active .right h2 {
    color: #00a0e9;
  }

  .page-progress-detail .right .intro {
    font-size: .48rem;
    line-height: .96rem;
    color: #999;
  }

  .page-progress-detail li.active .intro {
    color: #00a0e9;
  }

  .page-progress-detail .unfinished .circle {
    background: #b60005;
  }

  .page-progress-detail .unfinished h2{
    color:#b60005;
  }

  .page-progress-detail .unfinished .left {
    /*opacity: 0;*/
  }

  .unfinished .line-red {
    display: none !important;
    opacity: 0 !important;
  }

  .unfinished .line-grey {
    display: none !important;
    opacity: 0 !important;
  }

  .page-progress-detail .pay {
    position: absolute;
    top: -2px;
    /*left: 3.16rem;*/
    right: 1rem;
    width: 2.6rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: 1rem;
    background: #f39700;
    color: #fff;
    font-size: .56rem;
    text-align: center;
    display: table;
    vertical-align: middle;
  }

  .right {
    flex: 1;
  }
</style>

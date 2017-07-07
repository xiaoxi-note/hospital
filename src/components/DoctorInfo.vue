<template>
  <div class="page-doctor">
    <div v-if="dataDetail">
      <header>
        <div class="headCont" v-if="dataDetail">
          <span class="imgBg">
            <img v-if="dataDetail.photoSUrl" :src="dataDetail.photoSUrl" class="head">
            <img v-else src="../assets/user.jpg" class="head">
          </span>
        </div>
        <p class="name">{{dataDetail.name}}</p>
        <p class="type">{{dataDetail.title}}</p>
        <div class="info">
          <card>
            <div slot="content" class="card-demo-flex card-demo-content01">
              <div class="vux-1px-l vux-1px-r">
                <span>{{limitSurplus}}</span>
                <p>剩余号</p>
              </div>
              <div class="vux-1px-r">
                <span>{{limitWww}}</span>
                <p>问诊量</p>
              </div>
              <div>
                <span>{{dataDetail.follow.length}}</span>
                <p>关注</p>
              </div>
            </div>
          </card>
        </div>
      </header>
      <ul class="content underline-thin">
        <li class="underline-thin">
          <p class="area">执业点</p>
          <p>北京盛实国医馆{{dataDetail.dept}}</p>
        </li>
        <li class="underline-thin">
          <p class="skill">擅长</p>
          <p v-for="text in dataDetail.experts">{{text}}</p>
          <p v-if="dataDetail.experts.length == 0"></p>
        </li>
        <li>
          <p class="intro">
            <span>简介</span>
            <span v-if="isClose" v-tap="{methods:open}" class="drop">展开</span>
            <span v-else v-tap="{methods:close}" class="drop">收起</span>
          </p>
          <p v-if="isClose" class="over-white-space">{{dataDetail.briefIntro}}</p>
          <p v-else>{{dataDetail.briefIntro}}</p>
        </li>
      </ul>
      <footer>
        <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <!--<div class="vux-1px-r">-->
            <!--<img src="../assets/heart2.png">-->
            <!--<span>关注</span>-->
            <!--</div>-->
            <div v-tap="{methods:goOrder}">
              <img src="../assets/yellowClock.png">
              <span>预约挂号</span>
            </div>
          </div>
        </card>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {GET_DOCTINFOBYID} from '../store/type'
  import {Group, Cell, Alert, Card} from 'vux'

  export default {
    name       : 'NAME',
    data () {
      return {
        isClose     : true,
        dataDetail  : null,
        limitWww    : 0,
        limitSurplus: 0
      }
    },
    components : {
      Group,
      Cell,
      Alert,
      Card
    }, computed: {
      ...mapGetters([
        'getDoctInfoById'
      ])
    },
    created () {
      this.$store.dispatch(GET_DOCTINFOBYID, {docId: this.$route.query.doctId})
      this.limitWww     = this.$route.query.limitWww || 0
      this.limitSurplus = this.$route.query.limitSurplus || 0
    },
    methods    : {
      open () {
        this.isClose = false
      },
      close () {
        this.isClose = true
      },
      goOrder () {
        this.$router.push({
          name: 'doctorMsg', query: this.$route.query
        })
      }
    },
    watch      : {
      getDoctInfoById (newValue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.dataDetail = respose.data
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  .page-doctor {
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

  .card-demo-flex > div > span {
    font-size: .7rem;
    font-weight: 800;
  }

  .weui-panel:before {
    border: none;
  }

  .vux-1px-r {
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

  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  footer .card-demo-flex {
    background: #fff;
  }

  footer .card-demo-flex > div > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: .76rem;
  }

  footer .card-demo-flex > div > span {
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

  footer .card-demo-content01 {
    padding: .5rem 0;
  }

  .over-white-space
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    width 13rem

  img.head {
    margin-left: 0;
  }
</style>

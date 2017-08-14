<template>
  <div class="page-orderInfo">
    <header v-if="doctInfo">
      <div class="doc-info">
        <div class="intro">
          <div class="headCont">
            <span class="imgBg"></span>
            <img v-if="doctInfo.photoLUrl" :src="doctInfo.photoLUrl" class="head">
            <img v-else src="../assets/user.jpg" class="head">
          </div>
          <div>
            <div class="name">{{doctInfo.name}}</div>
            <div class="type">{{doctInfo.title}}</div>
          </div>
        </div>
        <div class="message">
          <p>就诊医馆：盛实国医馆</p>
          <p>就诊科室：{{doctInfo.dept}}</p>
          <p>就诊时间：{{orderDate}} {{day}}</p>
          <p>挂号费用：{{fees}}元</p>
        </div>
      </div>
    </header>
    <div class="content underline-thin">
      <ul>
        <li class="underline-thin people" @click="checkContact">
          <span class="left">就诊人</span>
          <span class="right">{{contactData.name}}</span>
        </li>
        <li class="underline-thin review">
          <span class="left">就诊时间</span>
          <group class="dateSelect">
            <popup-picker :data="orderDateList"
                          v-model="visitDate"
                          value=""
                          ref='datePicker'></popup-picker>
          </group>
        </li>
        <li class="underline-thin info" @click="inputMsg">
          <span class="left">症状信息</span>
          <span class="right msg-region">{{msg}}</span>
        </li>
        <!--<li class="pay-method">-->
        <!--<span class="left">支付方式</span>-->
        <!--<span class="right">会员卡</span>-->
        <!--</li>-->
      </ul>
    </div>
    <div class="rule"
         :class="{'show-rule':showRule,'hide-rule':!showRule}">
      <p @click="editShow">
        我已了解并同意以下规则
        <img src="../assets/down.png">
      </p>
      <div class="rule-content">
        <ul>
          <li>
            1、为向您提供更完善的服务，盛实国医馆线上预约挂号时需填写您的个人信息。在此盛实国医馆向您郑重承诺：所填全部个人信息，我们将会采取一切措施为您严格保密。为方便就诊，请您如实填写。
          </li>
          <li>
            2、本系统为免费预约系统，概不向预约患者收取任何费用。
          </li>
          <li>
            3、若遇专家因工作及特殊原因停诊，我们会及时与您联系取消预约，请务必保持您的通讯畅通；同时盛实国医馆会安排同等级别专家出诊。
          </li>
          <li>
            4、患者如遇特殊情况需更改或取消预约时，请您务必于就诊日前一个工作日，下午16:00点前通过拨打电话400-082-1601进行信息更改或取消预约。如无故爽约系统将默认记录，如无故爽约在1月内累计达到2次，此后3个月内将无法享受预约挂号服务。
          </li>
        </ul>
      </div>
    </div>
    <div class="commit-region">
      <a class="btn-submit able" @click="createNewOrder">提&nbsp;交</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import {
    mapGetters
  } from 'vuex'
  import {
    GET_DOCTINFOBYID,
    ORDERINFOWIDTHDATEBYDOCTID,
    CREATEORDER,
    GETUSERINFO
  } from '../store/type'
  import {
    Group,
    Cell,
    Alert,
    Card,
    Selector,
    PopupPicker
  } from 'vux'

  export default {
    name      : 'NAME',
    data () {
      return {
        isClose      : true,
        doctInfo     : null,
        orderDate    : '',
        day          : '',
        workTime     : '',
        fees         : 0,
        contactData  : {
          caseNo: 0,
          name  : '',
          age   : 0
        },
        msg          : '',
        orderDateList: [],
        visitDate    : [],
        userInfo     : null,
        showRule     : false
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      Card,
      Selector,
      PopupPicker
    },
    computed  : {
      ...mapGetters([
        'getDoctInfoById',
        'orderInfoWidthDateByDoctId',
        'createOrder',
        'getUserInfo'
      ])
    },
    created(){
      if (this.getDoctInfoById.status === 'success') {
        this.doctInfo = this.getDoctInfoById.payload.data
      } else {
        this.$store.dispatch(GET_DOCTINFOBYID, {docId: this.$route.query.doctId})
      }

      this.$store.dispatch(ORDERINFOWIDTHDATEBYDOCTID, {
        date : this.$route.query.orderDate,
        docId: this.$route.query.doctId
      })
      this.orderDate          = this.$route.query.orderDate;
      this.day                = this.$route.query.day;
      this.workTime           = this.$route.query.workTime;
      this.fees               = this.$route.query.fees;
      this.contactData.caseNo = this.$route.query.caseNo
      this.contactData.name   = this.$route.query.name || '请选择'
      this.contactData.age    = this.$route.query.age
      this.msg                = this.$route.query.msg || '请输入'
      this.$route.query.visitDate && (this.visitDate = [this.$route.query.visitDate])
      if (!this.contactData.caseNo) {
        this.$store.dispatch(GETUSERINFO)
      }
    },
    methods   : {
      open () {
        this.isClose = false
      },
      close () {
        this.isClose = true
      },
      goOrder () {

      },
      checkContact(){
        this.$router.push({
            name : 'Contacts',
            query: Object.assign(this.$route.query, {
              visitDate: this.visitDate[0]
            })
          },
        )
      },
      inputMsg (){
        this.$router.push({
            name : 'patientPrivateMsg',
            query: Object.assign(this.$route.query, {
              visitDate: this.visitDate[0]
            })
          },
        )
      },
      createNewOrder(){
        var sendData = {
          caseNo   : this.contactData.caseNo,
          date     : this.orderDate,
          visitTime: this.visitDate[0],
          age      : this.contactData.age,
          doctId   : this.$route.query.doctId
        };

        this.$store.dispatch(CREATEORDER, sendData)
      },
      getButtonAble (){
        return !!this.contactData.caseNo
      },
      editShow(){
        this.showRule = !this.showRule;
      }
    },
    watch     : {
      getDoctInfoById (newValue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.doctInfo = respose.data
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      },
      orderInfoWidthDateByDoctId(newValue, oldVaue) {
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            this.orderDateList = [response.data[0].remainTime];
            this.visitDate.length == 0 && ( this.visitDate = [response.data[0].remainTime[0]]);
          } else {
            this.$vux.alert.show({
              title  : '',
              content: response.errmsg,
            })
          }
        }
      },
      createOrder(newValue, oldVaue) {
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            if (response.data.bookingNo) {
              var self = this;
              this.$vux.alert.show({
                title  : '',
                type   : 'success',
                content: '预约成功！',
                onHide(){
                  self.$router.push({name: 'myorder'})
                }
              })
            }
          } else {
            this.$vux.alert.show({
              title  : '',
              content: response.errmsg,
            })
          }
        }
      },
      getUserInfo(newValue, oldVaue) {
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            this.userInfo           = response.data;
            this.contactData.caseNo = this.userInfo.case_no;
            this.contactData.name   = this.userInfo.name;
            this.contactData.age    = this.getAge(this.userInfo.birthday);

          } else {
            this.$vux.alert.show({
              title  : '',
              content: response.errmsg,
            })
          }
        }
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  .page-orderInfo {
    padding-bottom: 5rem;
  }

  header {
    /*background-color: #b60005;*/
    text-align: left;
    color: #fff;
    font-size: .56rem;
    height: auto;
  }

  .doc-info-cont {

  }

  header .doc-info {
    background: #b60005 url(../assets/doctor-bg.png) left top no-repeat;
    background-size: 100% auto;
    /*background-position: -1px left;*/
  }

  .headCont {
    height: 2.44rem;
    width: 2.44rem;
    margin: 0;
  }

  header span.imgBg {
    width: 2.44rem;
    height: 2.44rem;
    top: 0;
  }

  header img.head {
    width: 2.08rem;
    height: 2.08rem;
  }

  header .doc-info > div {
    position: relative;
    width: 90.6%;
    margin: auto;
    padding: .44rem 0;
    box-sizing: border-box;
    line-height: .96rem;
  }

  header .doc-info > div:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5);
  }

  header .doc-info > div:last-child:after {
    border-bottom: none;
  }

  header .doc-info div.intro {
    display: flex;
    align-items: center;
    padding: .72rem 0;
  }

  .intro .name {
    font-weight: bold;
    /*font-size: .9rem;*/
    padding: 0 0 0 .5rem;
  }

  .intro .type {
    padding: 0 0 0 .5rem;
  }

  .intro i {
    width: 1px;
    height: .7rem;
    background: #fff;
    margin: 0 .4rem;
    /*transform: scaleX(.5);*/
  }

  .rule p {
    color: #bf7a7c;
    position: relative;
    height 1.5rem
    line-height 1.5rem
  }

  .rule img {
    position: absolute;
    right: 0rem;
    top: 50%;
    transition: all .5s;
    width: .58rem;
  }

  .rule {
    background #fff
    text-align left
    padding-left 1rem
    padding-right 1rem
    .rule-content {
      /*transition: all .5s;*/
      overflow hidden
    }
  }

  .content {
    background: #fff;
  }

  .content li {
    position: relative;
    width: 90%;
    margin: auto;
    height: .8rem;
    line-height: .8rem;
  }

  .content li:before {
    content: '';
    width: .76rem;
    height: 1rem;
    position: absolute;
    right: 0;
    background: url(../assets/allIcon.png) no-repeat;
    background-size: .8rem auto;
    background-position: left -4.1rem;
  }

  .content li .left {
    float: left;
    background: url(../assets/allIcon.png) left top no-repeat;
    background-size: .8rem auto;
    padding-left: 1.3rem;
  }

  .content li.review .left {
    background-position: left -1.12rem
  }

  .content li.info .left {
    background-position: left -2.2rem
  }

  .content li.pay-method .left {
    background-position: left -3.2rem
  }

  .content li .right {
    float: right;
    padding-right: 1rem;
  }

  .btn-submit {
    display: block;
    margin: auto;
    margin-top: 1.5rem;
    width: 92.5%;
    height: 1.6rem;
    line-height: 1.6rem;
    border-radius: 1.8rem;
    background: #666;
    font-size: .64rem;
    color: #fff;
  }

  .btn-submit.able {
    background: #b60005 !important
  }

  .commit-region {
    position: fixed;
    bottom: 1rem;
    width: 100%;
  }

  .msg-region {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 5rem;
    text-align: right;
  }

  .review
    display flex

  .dateSelect
    flex 1
    .weui-cells
      flex 1
      right 0px
      position absolute
      top 0.3rem
      margin-top 0 !important

  .show-rule
    p
      img
        transform rotate(-180deg)
    .rule-content
      height auto
      padding-bottom 1rem
      font-size .6rem
      color: #9a9a9a

  .hide-rule
    .rule-content
      height 0

</style>

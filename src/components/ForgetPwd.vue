<template>
  <div class="page-register">
    <div class="tab underline-thin">
      <div class="box-input">
        <div class="phone underline-thin">
          <label>手&nbsp;机&nbsp;号 ：</label>
          <input
            type="tel"
            maxlength="11"
            placeholder="请输入您的手机号"
            v-model="sendData.phone"
          >
          <div :class="[check.phone ? 'show' : 'hide', 'tip']">
            <div class="triangle"></div>
            <div class="content">请输入正确手机号</div>
          </div>
          <span class="getCode"
                v-if="checkPhone() && !isSendCode"
                @click="sendMessage">获取验证码</span>
          <span class="getCode disabled"
                v-if="isSendCode">{{waitCheckCodeTimeEnd}}秒后获取</span>
        </div>
        <div class="underline-thin">
          <label>验&nbsp;证&nbsp;码 ：</label>
          <input
            type="tel"
            maxlength="6"
            placeholder="请输入您的验证码"
            v-model="sendData.checkCode"
          >
        </div>
        <div class="underline-thin">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码 ：</label>
          <input
            type=""
            name=""
            placeholder="请输入您的密码"
            v-model="sendData.pwd"
          >
        </div>
        <div class="underline-thin">
          <label>重复密码 ：</label>
          <input
            type=""
            name=""
            placeholder="请再次输入您的密码"
            v-model="sendData.pwdAgain"
          >
          <div :class="[check.rePwd ? 'show' : 'hide', 'tip']">
            <div class="triangle"></div>
            <div class="content">两次输入密码不同</div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-button">
      <a
        :class="[disable ? 'btn-red' : 'btn-grey', 'btn', 'register']"
        v-tap.prevent="{methods:getApiResetPwd}"
      >提&nbsp;&nbsp;交</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {Group, Popover, Alert} from 'vux'
  import {GET_SENDMSGCODE, RESETPWD} from '../store/type'

  export default {
    name      : 'forgetPwd',
    components: {
      Group,
      Popover,
      Alert,
    },
    data () {
      return {
        disable             : false, // 按钮是否可点击
        clickButton         : true,
        isSendCode          : false,
        waitCheckCodeTimeEnd: 0,
        sendData            : {
          phone    : '',
          checkCode: '',
          pwd      : '',
          pwdAgain : '',
        },
        check: {
          phone: false,
          rePwd: false,
        }
      }
    },
    computed  : {
      ...mapGetters([
        'resetPwd',
        'sendMsgCode'
      ])
    },
    methods   : {
      checkAll () {
        if (!this.checkPhone()) {
          this.check.phone = true
        } else {
          this.check.phone = false
        }
        if (this.sendData.pwd !== this.sendData.pwdAgain) {
          this.check.rePwd = true
        } else {
          this.check.rePwd = false
        }
        if (this.check.phone || this.check.rePwd){
          return false
        }
        return true
      },
      getApiResetPwd () {
        const isPass = this.checkAll()
        if (this.disable === false || !isPass) {
          return
        }
        const params = {
          phone      : this.sendData.phone,
          checkCode  : this.sendData.checkCode,
          pwd        : this.sendData.pwd,
          pwdAgain   : this.sendData.pwdAgain,
        }
        this.$store.dispatch(RESETPWD, params)
      },
      checkPhone (){
        return (/^1[3-9]\d{9}$/.test(this.sendData.phone))
      },
      sendMessage(){
        this.isSendCode = true;
        this.$store.dispatch(GET_SENDMSGCODE,
          {
            phone: this.sendData.phone
          })
      },
      showTime(){
        this.waitCheckCodeTimeEnd -= 1;
        if (this.waitCheckCodeTimeEnd > 0) {
          setTimeout(this.showTime, 1000)
        } else {
          this.isSendCode = false;
        }
      },
      checkPrams(){
        if (this.sendData.phone
          && this.sendData.checkCode
          && this.sendData.pwd
          && this.sendData.pwdAgain
        ) {
          this.disable = true
        } else {
          this.disable = false
        }
      }
    },
    watch: {
      resetPwd (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            var that = this;
            this.$vux.alert.show({
              title  : '',
              content: '修改成功',
              onHide () {
                that.$router.go(-1)
              }
            })
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      },
      sendMsgCode(newValue){
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.waitCheckCodeTimeEnd = 60;
            this.showTime();
          }
        }
      },
      sendData: {
        deep: true,
        handler(){
          this.checkPrams();
        }
      }
    }
  }

</script>
<style type="text/stylus" lang="stylus">

  .page-register
    padding-bottom: 1rem;

    .tab {
      position: relative;
      background: #fff;
      font-size: .54rem;
    }

    .vux-tab .vux-tab-item {
      font-size: .57rem;
    }

    .box-input {
      margin: auto;
      font-size: .54rem;
      text-align: left;
      width: 91.5%;
    }

    .vux-tab .vux-tab-ink-bar {
      bottom: 1px;
    }

    .box-input > div.underline-thin {
      height: 1.6rem;
      line-height: 1.6rem;
      padding-left: 0.26rem;
      position: relative;
      padding-top: 0.24rem;
      display: flex;
    }

    .box-input .phone {
      position: relative;
      margin-top: 0
    }

    .weui-cells:after, .weui-cells:before {
      display none
    }

    .box-input .phone .getCode {
      display: inline-block
      width: 3.66rem
      height: 1.12rem
      line-height: 1rem
      text-align: center
      border: 1px solid #f18900
      border-radius: 1.14rem
      color: #f18900
      position: absolute
      top: 50%
      transform: translateY(-50%);
      right: 0;
      box-sizing: border-box;
    }
    .getCode.disabled
      color #949393 !important
      border: 1px solid #949393 !important

    .sexSelect {
      display: inline-block;
      /*position: absolute;*/
      width: 30%;
      height: 100%;
      line-height: 1.6rem;
      flex: 1;
      margin-top: -.24rem;
    }

    .box-input .upload {
      /*padding: .38rem 0 .6rem .26rem;*/
      background url('../assets/upload.png')
      width 3.6rem
      height: 3.6rem;
      display inline-block
      background-size cover
      text-align center
    }

    .box-input .upload label {
      line-height: 1.28rem;
    }

    .box-input .upload img {
      width: 2.2rem;
      vertical-align: top;
    }

    .register {
      margin-top: 1.2rem;
    }

  .weui-cells
    margin-top 0 !important
    padding-top 0 !important

  .date-birthday
    flex 1
    margin-top -.24rem
    .vux-no-group-title
      a
        height 1.8rem
        padding-top 0
        padding-bottom 0
      .vux-datetime-value
        text-align left
        height 1.8rem
        line-height 1.8rem
        font-size .6rem

  .add-button
    position fixed
    bottom 1rem
    width 100%

  .img-lib
    padding-left 1rem
    padding-right 1rem
    padding-top .5rem
    li
      text-align center
      width 33%
      float left
      img
        height 2rem

  .upload-unable
    &:after
      content: ''
      display block
      clear both
</style>

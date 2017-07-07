<template>
  <div class="page-register">
    <div class="tab underline-thin">
      <div class="box-input">
        <div class="phone underline-thin">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码 ：</label>
          <input
            type="password"
            maxlength="11"
            placeholder="请输入6位密码"
            v-model="sendData.pwd"
          >
        </div>
      </div>
    </div>
    <div class="tab underline-thin">
      <div class="box-input">
        <div class="phone underline-thin">
          <label>重复密码 ：</label>
          <input
            type="password"
            maxlength="11"
            placeholder="请重复输入密码"
            v-model="sendData.pwdSecond"
          >
        </div>
      </div>
    </div>
    <div class="add-button"
         @click="editPwdAction"
         :class="{disabled: !sendData.pwd ||  sendData.pwd<6 || sendData.pwd != sendData.pwdSecond}">
      确定
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {Group, Alert} from 'vux'
  import {EDITPWD} from '../store/type'


  export default {
    name      : 'addContact',
    components: {
      Group,
      Alert
    },
    data () {
      return {
        sendData: {
          pwd      : '',
          pwdSecond: ''
        }
      }
    },
    computed  : {
      ...mapGetters([
        'editPwd'
      ])
    },
    methods   : {
      editPwdAction () {
        this.$store.dispatch(EDITPWD, this.sendData)
      }
    },
    watch     : {
      editPwd (newValue){
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            var _this = this;
            this.$vux.alert.show({
              title  : '',
              content: '修改成功！',
              type   : 'success',
              time   : 2000,
              onHide(){
                _this.$router.go(-1)
              }
            })
          } else {
            _this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      }
    }
  }

</script>
<style type="text/stylus" lang="stylus">

  .page-register
    padding-bottom: 1rem;

    select
      font-size .6rem
      padding-left 0
    .date-birthday .vux-no-group-title a
      padding-left 0
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
      margin-top: 0.24rem;
      display: flex;
      &:first-child {
        margin-top: 0 !important
      }

    }

    .box-input .phone {
      position: relative;
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
      padding: .38rem 0 .6rem .26rem;
      background url('../assets/upload.png')
      width 78px
      height 60px
      display inline-block
      background-size cover
    }

    .box-input .upload label {
      line-height: 1.28rem;
    }

    .box-input .upload img {
      width: 2.2rem;
      vertical-align: top;
    }

    .show {
      display: block;
    }

    .hide {
      display: none;
    }

    .tip-box input {
      width: 100%;
    }

    .tip {
      position: absolute;
      margin-left: -1.3rem;
      margin-top: 1.6rem;
      margin-left: 1.6rem;
      z-index: 3;
      display: none;
    }

    .tip .triangle {
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fdd005;
      margin-left: 1.2rem;
    }

    .tip .content {
      background: #fdd005;
      padding: 0 .3rem;
      border-radius: 5px;
      height: .94rem;
      line-height: .94rem;
      font-size: 0.46rem;
      color: #fff;
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
    bottom 0
    width 100%
    background #b60005
    height 1.8rem
    font-size .6rem
    line-height 1.8rem
    color #fff

  .disabled
    color #fff !important
    border: 1px solid #949393 !important
    background #666
</style>

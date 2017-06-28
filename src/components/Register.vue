<template>
  <div class="page-register">
    <div class="tab underline-thin">
      <tab defaultColor="#333333" active-color="#b60005" bar-active-color="#b60005">
        <tab-item selected @on-item-click="onPatientClick">患者</tab-item>
        <tab-item @on-item-click="onDoctorClick">医生</tab-item>
      </tab>
      <div class="box-input">
        <div class="phone underline-thin">
          <label>手&nbsp;机&nbsp;号 ：</label>
          <input
            type="number"
            maxlength="11"
            placeholder="请输入您的手机号"
            v-model="sendData.phone"
          >
          <div class="tip"
               :class="{block:clickButton && !checkPhone()}">
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
            type="number"
            placeholder="请输入您的验证码"
            v-model="sendData.checkCode"
          >
          <div class="tip">
            <div class="triangle"></div>
            <div class="content">您输入的验证码有误</div>
          </div>
        </div>
        <div class="underline-thin">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码 ：</label>
          <input
            type=""
            name=""
            placeholder="请输入您的密码"
            v-model="sendData.pwd"
          >
          <div class="tip"
               :class="{block:clickButton && sendData.pwd.length == 0}">
            <div class="triangle"></div>
            <div class="content">请输入密码</div>
          </div>
        </div>
        <div class="underline-thin">
          <label>重复密码 ：</label>
          <input
            type=""
            name=""
            placeholder="请再次输入您的密码"
            v-model="sendData.pwdAgain"
          >
          <div class="tip"
               :class="{block:clickButton && sendData.pwd != sendData.pwdAgain}">
            <div class="triangle"></div>
            <div class="content">两次输入密码不同</div>
          </div>
        </div>
        <div class="underline-thin">
          <label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 ：</label>
          <input
            type=""
            name=""
            placeholder="请输入您的真实姓名"
            v-model="sendData.name"
            maxlength="20"
          >
          <div class="tip"
               :class="{block:clickButton && sendData.name.length !=0}">
            <div class="triangle"></div>
            <div class="content">请输入正确姓名</div>
          </div>
        </div>
        <div class="underline-thin">
          <label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别 ：</label>
          <group class="sexSelect">
            <selector placeholder="请选择"
                      v-model="sendData.sex"
                      direction="right"
                      :options="sexList"></selector>
          </group>
        </div>
        <div class="underline-thin">
          <label>身份证号 ：</label>
          <input
            type=""
            name=""
            placeholder="请输入您的身份证号"
            v-model="sendData.idCard"
          >
          <div class="tip"
               :class="{block:clickButton && sendData.idCard.length != 18}">
            <div class="triangle"></div>
            <div class="content">请输入正确身份证号</div>
          </div>
        </div>
        <div class="underline-thin">
          <label>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日 ：</label>
          <group class="date-birthday">
            <Datetime v-model="sendData.birthDay" title=""></Datetime>
          </group>
        </div>
        <vue-core-image-upload
          v-if="isDoctor"
          :class="['upload']"
          :crop="false"
          :text="uploadText"
          @imageuploaded="loadImg"
          :max-file-size="5242880"
          url="//192.168.99.115:9999/upload">
        </vue-core-image-upload>
      </div>
    </div>
    <a
      :class="[disable ? 'btn-red' : 'btn-grey', 'btn', 'register']"
      v-tap.prevent="{methods:getApiRegister}"
    >注&nbsp;&nbsp;册</a>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {Tab, TabItem, Group, Popover, Alert, Selector, Datetime} from 'vux'
  import {GET_REGISTER, GET_SENDMSGCODE} from '../store/type'
  import VueCoreImageUpload  from 'vue-core-image-upload';

  var sexData = [{key: '1', value: '男'}, {key: '2', value: '女'}]

  export default {
    name: 'register',
    components: {
      Tab,
      TabItem,
      Group,
      Popover,
      Alert,
      Selector,
      Datetime,
      'vue-core-image-upload': VueCoreImageUpload
    },
    data () {
      return {
        disable: false, // 按钮是否可点击
        isDoctor: false, // 医生还是患者
        clickButton: false,
        sexList: sexData,
        isSendCode: false,
        waitCheckCodeTimeEnd: 0,
        sendData: {
          sex: sexData[0].key,
          phone: '',
          checkCode: '',
          pwd: '',
          pwdAgain: '',
          name: '',
          idCard: '',
          birthDay: ''
        },
        imgId: '',
        uploadText: '上传身份证'
      }
    },
    computed: {
      ...mapGetters([
        'getRegister',
        'sendMsgCode'
      ])
    },
    methods: {
      onPatientClick () {
        this.isDoctor = false
      },
      onDoctorClick () {
        this.isDoctor = true
      },
      getApiRegister (event) {
        // event.preventDefault()
        if (this.disable === false) {
          return
        }
        const params = {
          phone: this.sendData.phone,
          checkCode: this.sendData.checkCode,
          pwd: this.sendData.pwd,
          pwdAgain: this.sendData.pwdAgain,
          name: this.sendData.name,
          sex: this.sendData.sex,
          idCard: this.sendData.idCard,
          birthDay: (new Date(this.sendData.birthDay)).getTime(),
          birthDayStr: this.sendData.birthDay
        }
        this.$store.dispatch(GET_REGISTER, params)
      },
      checkPhone (){
        return (/^1[3-9]\d{9}$/.test(this.sendData.phone))
      },
      checkIdCard(){
        return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(this.sendData.idCard)
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
      loadImg(data){
        console.log(data)
      }
    },
    watch: {
      getRegister (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            var that = this;
            this.$vux.alert.show({
              title: '',
              content: '注册成功',
              onHide () {
                that.$router.push({
                  name: 'login'
                })
              }
            })
          } else {
            this.$vux.alert.show({
              title: '',
              content: respose.errmsg,
            })
          }
        }
      },
      sendMsgCode(newValue){
        debugger;
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
          if (this.checkPhone()
            && this.checkIdCard()
            && this.sendData.checkCode
            && this.sendData.pwd
            && this.sendData.name
            && this.sendData.idCard
            && this.sendData.birthDay
          ) {
            this.disable = true
          } else {
            this.disable = false
          }
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
      margin-top: .62rem;
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
</style>

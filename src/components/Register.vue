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
            type="tel"
            maxlength="11"
            placeholder="请输入您的手机号"
            v-model="sendData.phone"
            @focus="focus"
            @blur="blur"
          >
          <div :class="[isShowError && check.phone ? 'show' : 'hide', 'tip']">
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
            @focus="focus"
            @blur="blur"
          >
        </div>
        <div class="underline-thin">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码 ：</label>
          <input
            type=""
            name=""
            placeholder="请输入您的密码"
            v-model="sendData.pwd"
            @focus="focus"
            @blur="blur"
          >
        </div>
        <div class="underline-thin">
          <label>重复密码 ：</label>
          <input
            type=""
            name=""
            placeholder="请再次输入您的密码"
            v-model="sendData.pwdAgain"
            @focus="focus"
            @blur="blur"
          >
          <div :class="[isShowError && check.rePwd ? 'show' : 'hide', 'tip']">
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
            @focus="focus"
            @blur="blur"
          >
          <div :class="[isShowError && this.check.name ? 'show': 'hide', 'tip']">
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
            @focus="focus"
            @blur="blur"
          >
          <div :class="[isShowError && check.idCard ? 'show' : 'hide', 'tip']">
            <div class="triangle"></div>
            <div class="content">请输入正确身份证号</div>
          </div>
        </div>
        <div class="underline-thin">
          <label>详细地址 ：</label>
          <input
            type="text"
            name=""
            placeholder="请输入您的详细地址"
            v-model="sendData.address"
            @focus="focus"
            @blur="blur"
          >
        </div>
        <div class="underline-thin">
          <label>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日 ：</label>
          <group class="date-birthday">
            <Datetime v-model="sendData.birthDay"
                      title=""
                      :min-year="1910"
                      :max-year="2017"></Datetime>
          </group>
        </div>
        <ul class="img-lib" v-if="isDoctor">
          <li v-for="(item,index) in aptitudeArray">
            <image-canvas-upload :base-data="item" @uploaded="uploadfile"></image-canvas-upload>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <div class="add-button" v-if="!isFocus">
      <a
        :class="[disable ? 'btn-red' : 'btn-grey', 'btn', 'register']"
        v-tap.prevent="{methods:getApiRegister}"
      >注&nbsp;&nbsp;册</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {Tab, TabItem, Group, Popover, Alert, Selector, Datetime} from 'vux'
  import {GET_REGISTER, GET_SENDMSGCODE} from '../store/type'
  import ImageCanvasUpload from './imgUpload';

  var sexData = [{key: '0', value: '男'}, {key: '1', value: '女'}]
  var aptitudeArray = [{
    key : 'idCard',
    text: '身份证',
    src : ''
  }, {
    key : 'aptitude',
    text: '医师执业证',
    src : ''
  }, {
    key : 'yishizigezheng',
    text: '医师资格证',
    src : ''
  }, {
    key : 'xuelizhegnshu',
    text: '学历证',
    src : ''
  }]

  export default {
    name      : 'register',
    components: {
      Tab,
      TabItem,
      Group,
      Popover,
      Alert,
      Selector,
      Datetime,
      ImageCanvasUpload
    },
    data () {
      return {
        disable             : false, // 按钮是否可点击
        isDoctor            : false, // 医生还是患者
        clickButton         : true,
        sexList             : sexData,
        isSendCode          : false,
        waitCheckCodeTimeEnd: 0,
        sendData            : {
          sex      : sexData[0].key,
          phone    : '',
          checkCode: '',
          pwd      : '',
          pwdAgain : '',
          name     : '',
          idCard   : '',
          address  : '',
          birthDay : '',
        },
        imgId               : '',
        uploadText          : '上传身份证',
        aptitudeArray       : aptitudeArray,
        uploadIndex         : 0,
        imgUploadEnd        : false,
        check               : {
          phone : false,
          name  : false,
          rePwd : false,
          idCard: false
        },
        isShowError         : false,
        isFocus             : false
      }
    },
    computed  : {
      ...mapGetters([
        'getRegister',
        'sendMsgCode'
      ])
    },
    methods   : {
      onPatientClick () {
        this.isDoctor = false
      },
      onDoctorClick () {
        this.isDoctor = true
      },
      checkAll () {
        var result = true;
        if (!this.checkPhone()) {
          this.check.phone = true
          result           = false;
        } else {
          this.check.phone = false
        }
        if (this.sendData.name.length < 2) {
          this.check.name = true
          result          = false;
        } else {
          this.check.name = false
        }
        if (this.sendData.pwd !== this.sendData.pwdAgain) {
          this.check.rePwd = true
          result           = false;
        } else {
          this.check.rePwd = false
        }
        if (this.sendData.idCard.length !== 18) {
          this.check.idCard = true
          result            = false;
        } else {
          if (!this.sendData.birthDay) {
            this.sendData.birthDay = this.getBirthdatByIdNo(this.sendData.idCard)
          }
          this.check.idCard = false
        }
        if (this.isShowError && this.isDoctor && !this.imgUploadEnd) {
          alert(JSON.stringify(this.aptitudeArray))
          this.$vux.alert.show({
            title  : '',
            content: '请补充完整资质图片',
          })
          result = false;
        }
        if (this.check.phone || this.check.rePwd || this.check.idCard || this.check.name) {
          return false
        }
        return result
      },
      getApiRegister () {
        const isPass = this.checkAll()
        if (this.disable === false || !isPass) {
          return
        }
        const params = {
          phone      : this.sendData.phone,
          checkCode  : this.sendData.checkCode,
          pwd        : this.sendData.pwd,
          pwdAgain   : this.sendData.pwdAgain,
          name       : this.sendData.name,
          sex        : this.sendData.sex,
          idCard     : this.sendData.idCard,
          address    : this.sendData.address,
          birthDay   : this.sendData.birthDay,
          birthDayStr: this.sendData.birthDay
        }
        //(new Date(this.sendData.birthDay)).getTime()

        if (this.isDoctor) {
          params.imgInfo = encodeURIComponent(JSON.stringify(this.aptitudeArray))
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
      checkPrams(){
        if (this.sendData.phone
          && this.sendData.idCard
          && this.sendData.checkCode
          && this.sendData.pwd
          && this.sendData.name
          && this.sendData.birthDay
        ) {
          this.disable = true
          !this.isShowError && (this.isShowError = true)
        } else {
          this.disable = false
        }
      },
      uploadfile(id, key){
        var loadedCount = 0;
        [].forEach.call(this.aptitudeArray, (item) => {
          if (item.key == key) {
            item.src = id;
            item.uri = id;
          }
          if (item.src) loadedCount++;
        })
        this.imgUploadEnd = loadedCount == this.aptitudeArray.length;
      },
      focus(){
        this.isFocus = true
      },
      blur(){
        this.isFocus = false
      },
      trim(s) {
        return s.replace(/^\s+|\s+$/g, "");
      },
      getBirthdatByIdNo(iIdNo) {
        var tmpStr    = "";
        var idDate    = "";
        var tmpInt    = 0;
        var strReturn = "";

        iIdNo = this.trim(iIdNo);

        if ((iIdNo.length != 15) && (iIdNo.length != 18)) {
          strReturn = "输入的身份证号位数错误";
          return strReturn;
        }

        if (iIdNo.length == 15) {
          tmpStr = iIdNo.substring(6, 12);
          tmpStr = "19" + tmpStr;
          tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)

          return tmpStr;
        } else {
          tmpStr = iIdNo.substring(6, 14);
          tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)

          return tmpStr;
        }
      }
    },
    watch     : {
      getRegister (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            var that = this;
            this.$vux.alert.show({
              title  : '',
              content: '注册成功',
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
          this.checkAll();
          this.checkPrams();
        }
      },
      isDoctor(newValue){
        this.checkPrams();
      },
      imgUploadEnd(){
        this.checkPrams();
      }
    }
  }

</script>
<style type="text/stylus" lang="stylus">

  .page-register
    padding-bottom: 3rem;

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
      margin-top: .3rem;
      font-size: .54rem;
      text-align: left;
      width: 91.5%;
      padding-bottom 1rem
    }

    .vux-tab .vux-tab-ink-bar {
      bottom: 1px;
    }

    .box-input > div.underline-thin {
      height: 1.8rem;
      line-height: 1.8rem;
      padding-left: 0.26rem;
      position: relative;
      margin-top: 0.24rem;
      display: flex;
      input {
        line-height .7rem !important;
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
    top: .8rem
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
    padding-top .5rem
    li
      text-align center
      width 25%
      float left
      img
        height 2rem
    .clear
      clear both

  .upload-unable
    &:after
      content: ''
      display block
      clear both

  select.weui-select
    color: #333;
    font-size: .5rem;
    line-height: 2.28rem;

  .weui-cell_select .weui-cell__bd:after,
  .weui-cell_access .weui-cell__ft:after
    top:65% !important

</style>

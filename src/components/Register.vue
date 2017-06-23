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
            type="" 
            maxlength="11" 
            name="" 
            placeholder="请输入您的手机号" 
            v-model="phone"
          >
          <span class="getCode">获取验证码</span>
        </div>
        <div class="underline-thin">
          <label>验&nbsp;证&nbsp;码 ：</label>
          <div class="tip-box">
            <input 
              type="" 
              name="" 
              placeholder="请输入您的验证码"
              v-model="checkCode"
            >
            <div class="tip">
              <div class="triangle"></div>
              <div class="content">您输入的验证码有误</div>
            </div>
          </div>
        </div>
        <div class="underline-thin">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码 ：</label>
          <input 
            type="" 
            name="" 
            placeholder="请输入您的密码"
            v-model="pwd"
          >
        </div>
        <div class="underline-thin">
          <label>重复密码 ：</label>
          <input 
            type="" 
            name="" 
            placeholder="请再次输入您的密码"
            v-model="pwdAgain"
          >
        </div>
        <div class="underline-thin">
          <label>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 ：</label>
          <input 
            type="" 
            name="" 
            placeholder="请输入您的真实姓名"
            v-model="name"
          >
        </div>
        <div class="underline-thin">
          <label>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别 ：</label>
          <!-- <select v-model="sex">
            <option value='' disabled selected style='display:none; color:#999;'>请选择</option>
            <option value="1">男</option>
            <option value="2">女</option>
          </select> -->
          <group class="sexSelect">
            <selector placeholder="请选择" v-model="sex" :options="sexList"></selector>
          </group>
        </div>
        <div class="underline-thin">
          <label>身份证号 ：</label>
          <input 
            type="" 
            name="" 
            placeholder="请输入您的身份证号"
            v-model="idCard"
          >
        </div>
        <div class="upload" v-if="isDoctor">
          <label>资质上传 ：</label>
          <img src="../assets/upload.png">
        </div>
      </div>
    </div>
    <a 
      :class="[disable ? 'btn-red' : 'btn-grey', 'btn', 'register']"
      v-tap.prevent="{methods:getApiRegister}"
    >注&nbsp;&nbsp;册</a>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { Tab, TabItem, Group, Popover, Alert, Selector } from 'vux'
  import { GET_REGISTER } from '../store/type'

  export default {
    name: 'register',
    components: {
      Tab,
      TabItem,
      Group,
      Popover,
      Alert,
      Selector
    },
    data () {
      return {
        disable: true, // 按钮是否可点击
        isDoctor: false, // 医生还是患者
        sex: '',
        sexList: [{key: '1', value: '男'}, {key: '2', value: '女'}],
        phone: '',
        checkCode: '',
        pwd: '',
        pwdAgain: '',
        name: '',
        idCard: '',
        imgId: ''
      }
    },
    computed: {
      ...mapGetters([
        'getRegister'
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
          phone: this.phone,
          checkCode: this.checkCode,
          pwd: this.pwd,
          pwdAgain: this.pwdAgain,
          name: this.name,
          sex: this.sex,
          idCard: this.idCard,
          imgId: this.imgId
        }
        this.$store.dispatch(GET_REGISTER, params)
      }
    },
    watch: {
      getRegister (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            // this.$router.push({
            //   name: 'login'
            // })
          } else {
            this.$vux.alert.show({
              title: '',
              content: respose.errmsg,
            })
          }
        }
      }
    }
  }

</script>
<style rel="stylesheet/stylus">
  .page-register{
  	padding-bottom: 1rem;
  }
  .tab{
    position: relative;
    background: #fff;
    font-size: .54rem;
  }
  .vux-tab .vux-tab-item{
    font-size: .57rem;
  }
  .box-input{
    margin: auto;
    margin-top: .62rem;
    font-size: .54rem;
    text-align: left;
    width: 91.5%; 
  }
  .vux-tab .vux-tab-ink-bar{
  	bottom: 1px;
  }
  .box-input>div.underline-thin{
    height: 1.6rem;
    line-height: 1.6rem;
    padding-left: 0.26rem;
    position: relative;
    margin-top: 0.24rem;
  }
  .box-input>div.underline-thin:last-child:after{
    content: '';
    height: 0;
  }
  .box-input .phone{
    position: relative;
  }
  .box-input .phone .getCode{
    display: inline-block;
    width: 3.66rem;
    height: 1.12rem;
    line-height: 1rem;
    text-align: center;
    /*padding: .5rem;*/
    border: 1px solid #f18900;
    border-radius: 1.14rem;
    color: #f18900;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    box-sizing: border-box;
  }
/*  .box-input .sexSelect select{
    font-size: .54rem;
  }*/
  .sexSelect{
    display: inline-block;
    position: absolute;
    width: 30%;
    height: 1.6rem;
    line-height: 1.6rem;
  }
  .sexSelect .weui-cells, .sexSelect .vux-no-group-title{
    margin-top: 0;
    line-height: 1.6rem;
  }
  .sexSelect .weui-cells:before{
    content: '';
    height: 0;
    border-top: none;
  }
  .sexSelect .weui-cells:after{
    content: '';
    height: 0;
    border-bottom: none;
  }
  .box-input .upload{
    padding: .38rem 0 .6rem .26rem;
  }
  .box-input .upload label{
    line-height: 1.28rem;
  }
  .box-input .upload img{
    width: 2.2rem;
    vertical-align: top;
  }
  .show{
    display: block;
  }
  .hide{
    display: none;
  }
  .tip-box{
    width: 60%;
    display: inline-block;
    position: relative;
  }
  .tip-box input{
    width: 100%;
  }
  .tip-box .tip{
    position: absolute;
    margin-left: -1.3rem;
    margin-top: -0.4rem;
    z-index: 3;
  }
  .tip-box .tip .triangle{
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fdd005;
    margin-left: 1.2rem;
  }
  .tip-box .tip .content{
    background: #fdd005;
    padding: 0 .3rem;
    border-radius: 5px;
    height: .94rem;
    line-height: .94rem;
    font-size: 0.46rem;
    color: #fff;
  }
  .register{
  	margin-top: 1.2rem;
  }
</style>

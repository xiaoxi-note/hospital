<template>
  <div class="">
    <div v-tap="{methods:getApiInfo}"
         class="to-login">get api data
    </div>
    <div v-tap="{methods:goRegister}"
         class="to-login">注册
    </div>
    <div v-tap="{methods:goLogin}"
         class="to-login">登录
    </div>
    <div v-tap="{methods:goForgetPwd}"
         class="to-login">忘记密码
    </div>
    <div v-tap="{methods:goDoctorFocus}"
         class="to-login">名医关注
    </div>
    <div v-tap="{methods:goDoctorInfo}"
         class="to-login">医生简介
    </div>
    <div v-tap="{methods:goDoctorMsg}"
         class="to-login">医生预约信息
    </div>
    <div v-tap="{methods:goOrder}"
         class="to-login">预约
    </div>
    <div v-tap="{methods:goOrderInfo}"
         class="to-login">预约信息
    </div>
    <div v-tap="{methods:goMyOrder}"
         class="to-login">我的预约
    </div>
    <div v-tap="{methods:goMyOrderInfo}"
         class="to-login">我的预约情况
    </div>
    <div v-tap="{methods:goTinyPharmacy}"
         class="to-login">微药房
    </div>
    <div v-tap="{methods:goAccountDoctor}"
         class="to-login">我的账户-医生
    </div>
    <div v-tap="{methods:goTinySickRoom}"
         class="to-login">微病房
    </div>
    <div v-tap="{methods:drugList}"
         class="to-login">药房列表
    </div>
    <div v-for="(item, index) in msgList">
      {{index+1}}:{{item}}
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {GET_INFO} from '../store/type'

  export default {
    name: 'NAME',
    computed: {
      ...mapGetters([
        'getInfo'
      ])
    },
    data () {
      return {
        msgList: []
      }
    },
    methods: {
      ogLogin () {
        this.$router.push({
          name: 'login'
        })
      },
      goForgetPwd () {
        this.$router.push({
          name: 'forgetPwd'
        })
      },
      getApiInfo () {
        this.$store.dispatch(GET_INFO,{a:'sdfsdfsdf'})
      },
      goDoctorInfo () {
        this.$router.push({
          name: 'doctorInfo'
        })
      },
      goDoctorMsg () {
        this.$router.push({
          name: 'doctorMsg'
        })
      },
      goDoctorFocus () {
        this.$router.push({
          name: 'doctorFocus'
        })
      },
      goRegister () {
        this.$router.push({
          name: 'register'
        })
      },
      goLogin () {
        this.$router.push({
          name: 'login'
        })
      },
      goOrder () {
        this.$router.push({
          name: 'order'
        })
      },
      goOrderInfo () {
        this.$router.push({
          name: 'orderInfo'
        })
      },
      goMyOrder () {
        this.$router.push({
          name: 'myorder'
        })
      },
      goMyOrderInfo () {
        this.$router.push({
          name: 'myorderinfo'
        })
      },
      goTinyPharmacy () {
        this.$router.push({
          name: 'tinypharmacy'
        })
      },
      goAccountDoctor () {
        this.$router.push({
          name: 'accountdoctor'
        })
      },
      goTinySickRoom () {
        this.$router.push({
          name: 'tinysickroom'
        })
      },
      drugList () {
        this.$router.push({
          name: 'drugList'
        })
      }
    },
    ready () {
      console.log('ssss')
    },
    watch: {
      getInfo (newValue, oldVaue) {
        if (newValue.status === 'success') {
          console.log(JSON.stringify(newValue.payload))
          this.msgList.push(JSON.stringify(newValue.payload))
        }
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .to-login
    border 1px solid #999
    font-size 20px
    border-radius 10px
    line-height 40px
    height 40px
    margin-top 20px

</style>

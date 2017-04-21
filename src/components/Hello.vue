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
    <div v-tap="{methods:goDoctorInfo}"
         class="to-login">医生简介
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
      getApiInfo () {
        this.$store.dispatch(GET_INFO)
      },
      goDoctorInfo () {
        this.$router.push({
          name: 'doctorInfo'
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
<style scoped lang="stylus" rel="stylesheet/stylus">
  .to-login
    border 1px solid #999
    font-size 20px
    border-radius 10px
    line-height 40px
    height 40px
    margin-top 20px

</style>

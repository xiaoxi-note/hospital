<template>
  <div class="page-orderInfo">
    <header v-if="userInfo">
      <div class="intro">
        <img src="../assets/doctor-head.png">
        <div>
          <div>{{userInfo.name}}</div>
          <div>{{getPhone(userInfo.phone)}}</div>
        </div>
      </div>
    </header>
    <div class="content underline-thin">
      <ul>
        <li class="underline-thin" v-if="userInfo && userInfo.role == 1">
          <span class="name left">实名认证</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin" @click="goOrderHistory">
          <span class="audit left">预约记录</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin">
          <span class="change_pwd left">修改密码</span>
          <span class="right"></span>
        </li>
        <li class="underline-thin" style="display: none;">
          <span class="bind_tel left">手机绑定</span>
          <span class="right"></span>
        </li>
        <li @click="goContacts">
          <span class="address left">常用联系人</span>
          <span class="right"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {GETUSERINFO} from '../store/type'
  import {Group, Cell, Alert, Card} from 'vux'

  export default {
    name      : 'NAME',
    data () {
      return {
        isClose : true,
        userInfo: null
      }
    },
    computed  : {
      ...mapGetters([
        'getUserInfo'
      ])
    },
    components: {
      Group,
      Cell,
      Alert,
      Card
    },
    created () {
      this.$store.dispatch(GETUSERINFO)
    },
    methods   : {
      goOrderHistory(){
        this.$router.push({name: 'myorder'})
      },
      goContacts(){
        this.$router.push({name: 'Contacts', query: {isShow: 1}})
      }
    }, watch  : {
      getUserInfo (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const response = newValue.payload // 返回值
          if (response.errno === 0) {
            this.userInfo = response.data
          } else {
            this.showPwdErr = false
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

<style scoped rel="stylesheet/stylus">
  .page-orderInfo {
  }

  header {
    height: 4.38rem;
    background: #b60005 url(../assets/doctor-bg2.png) left bottom no-repeat;
    background-size: 100% auto;
    padding-top: .9rem;
    /*padding-bottom: 2rem;*/
    text-align: left;
  }

  header .intro {
    position: relative;
    width: 90%;
    margin: auto;
    box-sizing: border-box;
  }

  .intro {
    display: flex;
    align-items: center;
  }

  .intro img {
    width: 2.6rem;
    margin-right: .5rem;
  }

  .intro span {
    font-size: .68rem;
    color: #fff;
  }

  .content {
    background: #fff;
  }

  .content li {
    position: relative;
    width: 92.5%;
    margin: auto;
    height: 1rem;
    line-height: 1rem;
    font-size: .56rem;
    padding: .5rem 0;
  }

  .content li:before {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .4rem;
    right: -.4rem;
    background: url(../assets/allIcon.png) no-repeat 0 -4rem;
    background-size: .8rem auto;
  }

  .content li .left {
    float: left;
    background: url(../assets/allIcon.png) no-repeat 0 -4.95rem;
    background-size: .8rem auto;
    padding-left: 1.36rem;
  }

  .content li .name {
    background-position: 0 -3.24rem;
  }

  .content li .audit {
    background-position: 0 -7.3rem;
  }

  .content li .change_pwd {
    background-position: 0 -8.3rem;
  }

  .content li .bind_tel {
    background-position: 0 -9.2rem;
  }

  .content li .address {
    background-position: 0 -10.3rem;
  }

  .content li .right {
    float: right;
    padding-right: .76rem;
    color: #666;
  }
</style>

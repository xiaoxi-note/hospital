<template>
  <div class="page-drug-info">
    <div class="content underline-thin">
      <ul>
        <li class="underline-thin">
          <span class="name left">计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量:</span>
          <div class="right count">
            <span @click="add" class="control">+</span>
            <input type="number"
                   v-model="params.count"
                   min="1">
            <span @click="reduce" class="control">-</span>
          </div>
        </li>
        <li class="underline-thin" @click="checkContact">
          <span class="audit left">联&nbsp;系&nbsp;人:</span>
          <div class="select right contact">
            <span class="right">
              {{contactData.name}}
            </span>

          </div>
        </li>
        <li class="underline-thin">
          <span class="change_pwd left">代&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;煎:</span>
          <div class="right">
            <div class="result">{{params.decocting?"代煎":'不代煎'}}</div>
            <x-switch @change="switchClick" :value="params.decocting"></x-switch>
          </div>
        </li>
        <li class="underline-thin">
          <span class="address left">快&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;递:</span>
          <div class="right">
            <div class="result">{{params.express?"快递":'不快递'}}</div>
            <x-switch @change="switchExpressClick" :value="params.express"></x-switch>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <div class="agreement">
        <input type="checkbox" :checked="agreeRule">
        <span>我已阅读并同意该协议</span>
      </div>
      <a class="btn btn-submit" @click="newDrugInfo">提&nbsp;交</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapGetters
  } from 'vuex'
  import {
    GETUSERINFO,
    ADDDRUGINFO
  } from '../store/type'
  import {Group, Cell, Alert} from 'vux'
  import XSwitch from './switch.vue'

  export default {
    name      : 'NAME',
    data () {
      return {
        agreeRule  : true,
        params     : {
          count    : 1,
          decocting: false,
          express  : false
        },
        contactData: {
          name: ''
        }
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      XSwitch,
    },
    created () {
      if (this.$route.query.caseNo) {
        this.contactData.caseNo = this.$route.query.caseNo;
        this.contactData.name   = this.$route.query.name;
      } else {
        this.$store.dispatch(GETUSERINFO)
      }
    },
    computed  : {
      ...mapGetters([
        'getUserInfo',
        'addDrugInfo'
      ])
    },
    methods   : {
      add(){
        this.params.count++;
      },
      reduce(){
        if (this.params.count > 1)
          this.params.count--;
      },
      switchClick(result){
        this.params.decocting = result;
      },
      switchExpressClick(result){
        this.params.express = result;
      },
      checkContact(){
        this.$router.push({
          name : 'Contacts',
          query: Object.assign(this.$route.query, {
            drugInfo: 1
          })
        })
      },
      newDrugInfo(){
        var params       = {
          img_uri: this.$route.query.uri,
          contact_id: this.contactData.caseNo
        };
        params.count     = this.params.count;
        params.decocting = params.decocting ? 1 : 0;
        params.express   = params.express ? 1 : 0;
        this.$store.dispatch(ADDDRUGINFO, params);
      }
    },
    watch     : {
      getUserInfo(newValue, oldVaue) {
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            this.userInfo           = response.data;
            this.contactData.caseNo = this.userInfo.case_no;
            this.contactData.name   = this.userInfo.name;
          } else {
            this.$vux.alert.show({
              title  : '',
              content: response.errmsg,
            })
          }
        }
      },
      addDrugInfo(newValue, oldVaue) {
        if (newValue.status === 'success') {
          const response = newValue.payload
          var self       = this
          if (response.errno === 0) {
            this.$vux.alert.show({
              title  : '',
              type   : 'success',
              content: '提交成功！',
              onHide(){
                self.$router.push({name: 'drugList'})
              }
            })
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
  .page-drug-info
    background #fff

  ul
    .underline-thin
      display flex
      .left
        display inline-block
        width 2.5rem

      div.right
        text-align right
        flex 1
        display flex
        .result
          display inline-block
          float left
          flex 1
          padding-right .5rem

        span.control
          display inline-block
          width .8rem
          height .7rem
          line-height .6rem
          text-align center
          font-size .8rem
          position relative
          &:after
            content: ''
            display inline-block
            position absolute
            width 200%
            height 200%
            left 0
            border 1px solid #999
            transform scale(.5, .5) translate(-50%, -50%)
        input
          width 2rem
          outline none
          text-align center

      .count
        display block
        flex-direction row-reverse
      .contact
        flex-direction row-reverse
        padding-right .8rem

  footer
    position fixed
    width 100%
    bottom 1rem
    .agreement
      margin-bottom 1rem

  .select
    &:before
      content ''
      width .76rem
      height 1rem
      position absolute
      right 0
      background url(../assets/allIcon.png) no-repeat
      background-size .8rem auto
      background-position left -4.2rem

</style>

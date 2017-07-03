<template>
  <div class="Contacts-page">
    <div class="list-region">
      <ul>
        <li v-for="item in contactsData" @click="checked(item)" >
          <div class="main-info">
            <span>{{item.name}}</span>
            <span>{{getSex(item.sex)}}</span>
          </div>
          <div class="second-info">
            <span>{{getAge(item.birthday)}}岁</span>
            <span>{{getPhone(item.phone)}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-button" @click="addContact">
      增加常用联系人
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import {mapGetters} from 'vuex'
  import {GET_CONTACTS} from '../store/type'
  import {Group, Cell, Alert, Card, Flexbox, FlexboxItem, Datetime, XButton, PopupPicker} from 'vux'

  export default {
    name      : 'order',
    data () {
      return {
        contactsData: {},
        isShow      : false
      }
    },
    computed  : {
      ...mapGetters([
        'getContacts'
      ])
    },
    components: {},
    methods   : {
      addContact(){
        this.$router.push({
          name: 'ContactAdd'
        })
      },
      checked(item){
        if (this.isShow) {
          this.$router.push({
            name : 'ContactEdit',
            query: {id: item.id}
          })

        } else {
          this.$router.replace({
            name : 'orderInfo',
            query: Object.assign(this.$route.query, {
              caseNo: item.case_no,
              name  : item.name,
              age   : this.getAge(item.birthday)
            })
          })
        }
      }
    },
    created () {
      this.$store.dispatch(GET_CONTACTS)
      this.isShow = !!this.$route.query.isShow
    },
    watch     : {
      getContacts (newValue){
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            this.contactsData = response.data
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
  .list-region
    ul
      background #fff
      li
        position relative
        text-align left
        padding .4rem .4rem
        border-bottom 1px solid #eee

        .main-info
          color #000
          font-size .5rem
          span
            margin-right .5rem
        .second-info
          font-size .4rem
          span
            margin-right .5rem

  .add-button
    position fixed
    bottom 0
    width 100%
    background #b60005
    height 1.8rem
    font-size .6rem
    line-height 1.8rem
    color #fff

  .edit
    position absolute
    right 0
    line-height 2.42rem
    border-left 1px solid #eee
    top 0
    display inline-block
    height 2.42rem
    width 2.4rem
    text-align center
    font-size .5rem

  li:before {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    top .6rem
    right .3rem
    background: url(../assets/allIcon.png) no-repeat 0 -4.1rem;
    background-size: .8rem auto;
  }
</style>

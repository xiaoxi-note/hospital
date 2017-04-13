<template>
  <div class="">
    Hello word
    <div v-tap="{methods:ogLogin}"
         class="to-login">go to login
    </div>
    <div v-tap="{methods:getApiInfo}"
         class="to-login">get api data
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

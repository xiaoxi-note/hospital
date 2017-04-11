<template>
  <div class="">
    <div v-tap="{methods:show}">
      <group>
        <cell title="title"
              value="value"></cell>
      </group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Group, Cell, Alert} from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      Group,
      Cell,
      Alert
    },
    ready () {
    },
    methods: {
      show () {
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">

</style>

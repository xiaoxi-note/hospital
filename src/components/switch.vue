<template>
  <div class="component-switch"
       :class="{open:checked,close:!checked}"
       @click="checkSwitch">

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name   : 'XSwitch',
    props  : {
      value  : Boolean,
      default: false
    },
    data () {
      return {
        checked: false
      }
    },
    created () {
      this.checked = this.value
    },
    methods: {
      checkSwitch(){
        this.checked = !this.checked
        this.$emit('change', this.checked)
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  .component-switch
    width 2rem
    background #b60005
    position relative
    border-radius 1rem
    display inline-block
    transition all .5s
    height .8rem
    border 1px solid #cacaca

    &:before
      transition: all .2s

  .component-switch.close
    background #eeeeee
    &:before
      position absolute
      content: ''
      display inline-block
      height .7rem
      width .7rem
      border 1px solid #999
      background #fff;
      top 0
      right 0
      border-radius .7rem

  .component-switch.open
    &:before
      position absolute
      content: ''
      display block
      width .7rem
      height .7rem
      border 1px solid #999
      background #fff;
      top 0
      left 0
      border-radius .7rem


</style>

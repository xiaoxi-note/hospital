<template>
  <div class="">
    Hello word
    <div v-tap="{methods:ogLogin}">go to login</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'NAME',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      ogLogin () {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
</style>

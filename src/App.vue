<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul,li{
    list-style: none;
  }
  body{
    font-size: 62.5%;
    height: 100%;
    background: #eff2f4 url(./assets/bg.png) left bottom no-repeat;
    background-size: 29% auto;
    background-attachment:fixed;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /* 重写vux dialog width & height */
  .weui-toast{
    width: 120px !important;
    height: 120px;
  }
</style>

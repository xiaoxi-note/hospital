<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style type="text/stylus" lang="stylus">

  @import "./stylus/common.css";
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  body {
    font-size: 62.5%;
    height: 100%;
    background: #eff2f4 url(./assets/bg.png) left bottom no-repeat;
    background-size: 29% auto;
    background-attachment: fixed;
  }

  #app {
    font-family: 'MicrosoftYaHeiUiLight';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .weui-toast {
    width: 120px !important;
    height: 120px;
  }

  .vux-tab .vux-tab-item {
    font-size: .64rem;
  }

  .block
    display block
</style>

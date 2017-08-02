<template>
  <div class="page-changedrug">
    <header>
      <div class="head underline-thin">
        <div class="upload-region">
          <image-canvas-upload :base-data="imgData"
                               @uploaded="uploaded"></image-canvas-upload>
          <div class="intro">
            <h2 v-if="imgSrc">点击修改处方照片</h2>
            <h2 v-else>上传处方照片</h2>
            <p>请确保图片内容清晰可见</p>
          </div>
        </div>
      </div>
      <div class="content">
        <span class="status" v-if="!imgSrc">示例</span>
        <div class="sample-box">
          <img v-if="!imgSrc" src="../assets/sample.png">
          <img v-else :src="'/img/'+imgSrc">
        </div>
        <p class="p-tip">处方图片</p>
      </div>
    </header>
    <footer>
      <a class="btn btn-submit"
         @click="toNext"
         :class="{able:imgSrc}">下一步</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">

  import {Group, Cell, Alert} from 'vux'
  import ImageCanvasUpload from './imgUpload';

  export default {
    name      : 'NAME',
    data () {
      return {
        isUpload: true,
        imgData : {
          key : '',
          text: '',
          src : ''
        },
        imgSrc  : ''
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      ImageCanvasUpload
    },
    created () {
    },
    methods   : {
      toNext(){
        if (!this.imgSrc) return;
        var params = Object.assign({uri: this.imgSrc},
          this.$route.query
        )
        this.$router.push({
          name : 'drugInfo',
          query: params
        })
      }, uploaded(uuid){
        this.imgSrc = uuid
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  .page-changedrug {
    /*position: relative;*/
  }

  header {
    background: #fff;
  }

  .head {
    padding: .5rem 1.28rem;
    text-align: left;
  }

  .upload {
    /*display: none;*/
  }

  .upload-region .addimg {
    display: inline-block;
    vertical-align: middle;
    width: 2.58rem;
    height: 2.58rem;
    line-height: 2.4rem;
    border: 1px dashed #ccc;
    border-radius: 3px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ccc;
    text-align: center;
  }

  .upload-region .intro {
    display: inline-block;
    vertical-align: middle;
    margin-left: .5rem;
  }

  .upload-region .intro h2 {
    color: #333;
    font-size: .6rem;
    line-height: .88rem;
  }

  .upload-region .intro p {
    color: #999;
    font-size: .48rem;
    line-height: .72rem;
  }

  .upload-region
    & > div
      float left
    &:after
      content ''
      display block
      clear both

  .check {
    display: none;
    text-align: center;
  }

  .check img {
    display: block;
    width: 4rem;
    height: auto;
    margin: auto;
    margin-bottom: .5rem;
  }

  .check span {
    color: #f39700;
    font-size: .9rem;
  }

  .check p {
    color: #999;
    font-size: .7rem;
    margin-top: .2rem;
  }

  .content {
    position: relative;
    padding: 1.5rem 2rem;
  }

  .content .sample-box {
    background: #ccc;
    border-radius: 3px;
    margin: auto;
  }

  .content .sample-box img {
    width: 100%;
    height: 100%;
  }

  .content .p-tip {
    color: #999;
    font-size: .48rem;
    line-height: 1.6rem;
  }

  .content .status {
    position: absolute;
    left: 1.26rem;
    top: .3rem;
    font-size: .6rem;
    color: #999;
  }

  footer {
    width: 100%;
    position: absolute;
    bottom: 2rem;
  }

  footer .agreement {
    position: relative;
    color: #999;
  }

  footer .agreement input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  footer .agreement span {
    padding-left: 1rem;
    line-height: 1.88rem;
    font-size: .56rem;
  }

  .btn {
    background #999;
  }

  .able {
    background #b60005;
  }
</style>

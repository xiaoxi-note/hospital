<template>
  <div class="upload">
    <div class="lib-title">{{baseData.text}}</div>
    <input type="file" ref='uploadFile' name="" @change="selectFile()">
    <img ref="preview" v-show="isShow" src="" alt="" class="preview">
    <div class="uploading" v-show="isLoading">上传中...</div>
  </div>
</template>
<script type="text/javascript">
  import {post} from '../store/api'
  export default {
    name   : "image-canvas-upload",
    props  : ['baseData'],
    data   () {
      return {
        isShow   : false,
        isLoading: false
      }
    },
    methods: {
      selectFile () {
        var reader    = new FileReader();
        reader.onload = (evt) => {
          this.$refs.preview.src = evt.target.result;
          this.isShow            = true
          this.upload(evt.target.result)
        }
        reader.readAsDataURL(event.target.files[0]);
      },
      upload (data){
        this.isLoading = true;
        var params     = {imgData: data};
        this.$http.post('/upload', params).then((response) => {
          this.isLoading = false;
          console.log(response)
          var data = response.data.data
          if (data.status) {
            this.$emit('uploaded', data.uuid, this.baseData.key)
          }
        })
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus">
  .upload {
    /*padding: .38rem 0 .6rem .26rem;*/
    display inline-block
    background url('../assets/upload.png')
    width 3rem
    height 3rem
    display inline-block
    background-size cover
    text-align center
    position relative
  }

  .upload label {
    line-height: 1.28rem;
  }

  .upload img {
    width: 2.2rem;
    vertical-align: top;
    border: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .upload input[type='file'] {
    opacity: 0;
    width: 100%;
    height: 100%;
    margin-left: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  .uploading {
    position absolute
    background rgba(0, 0, 0, .7)
    width 100%
    height 100%
    top 0
    line-height 3rem
    color #fff
  }
</style>
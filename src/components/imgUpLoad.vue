<template>
  <div class="upload">
    <div class="lib-title">{{message.text}}</div>
    <input type="file" ref='uploadFile' name="" @change="selectFile()">
    <img ref="preview" src="" alt="" class="preview">
  </div>
</template>
<script type="text/javascript">
  import {post} from '../store/api'
  export default {
    name: "image-canvas-upload",
    props: ['message'],
    methods: {
      selectFile () {
        var reader = new FileReader();
        reader.onload = (evt) => {
          this.$refs.preview.src = evt.target.result;
          this.upload(evt.target.result)
        }
        reader.readAsDataURL(event.target.files[0]);
      },
      upload (data){
        var params = data,
        		_this = this;
        const res = this.$http.post('/upload', params).then((response)=>{
        	console.log(response)
	        // todo ajax post
	        // todo then
	        var id = 1
	        this.$emit('uploaded', id)
        })
      }
    }
  }
</script>
<style type="stylesheet/stylus" lang="stylus">
  .upload {
    /*padding: .38rem 0 .6rem .26rem;*/
    display inline-block
    background url('../assets/upload.png')
  // width 3.6rem
  // height 3.6rem
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
</style>
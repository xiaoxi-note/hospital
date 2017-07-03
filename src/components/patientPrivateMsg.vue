<template>
  <div class="page-patient-private-msg">
    <div class="input-region">
      <group>
        <x-textarea :max="100" placeholder="请输入疾病信息" v-model="msg"></x-textarea>
      </group>

    </div>
    <div class="commit-region">
      <a class="btn-submit" @click="submit">确&nbsp;定</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import {Group, XTextarea} from 'vux'

  export default {
    name      : 'NAME',
    data () {
      return {
        msg: null
      }
    },
    created(){
      this.msg = this.$route.query.msg
    },
    methods   : {
      submit(){
        this.$router.replace({
            name : 'orderInfo',
            query: Object.assign(this.$route.query, {msg: this.msg})
          },
        )
      }
    },
    components: {
      XTextarea,
      Group
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-orderInfo {
    padding-bottom: 1rem;
  }

  header {
    /*background-color: #b60005;*/
    text-align: left;
    color: #fff;
    font-size: .56rem;
    height: 10.44rem;
  }

  .doc-info-cont {

  }

  header .doc-info {
    background: #b60005 url(../assets/doctor-bg.png) left top no-repeat;
    background-size: 100% auto;
    /*background-position: -1px left;*/
  }

  .headCont {
    height: 2.44rem;
    width: 2.44rem;
    margin: 0;
  }

  header span.imgBg {
    width: 2.44rem;
    height: 2.44rem;
    top: 0;
  }

  header img.head {
    width: 2.08rem;
    height: 2.08rem;
    top: .2rem;
    left: 1.2rem;
  }

  header .doc-info > div {
    position: relative;
    width: 90.6%;
    margin: auto;
    padding: .44rem 0;
    box-sizing: border-box;
    line-height: .96rem;
  }

  header .doc-info > div:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5);
  }

  header .doc-info > div:last-child:after {
    border-bottom: none;
  }

  header .doc-info div.intro {
    display: flex;
    align-items: center;
    padding: .72rem 0;
  }

  .intro .name {
    font-weight: bold;
    /*font-size: .9rem;*/
    padding: 0 0 0 .5rem;
  }

  .intro i {
    width: 1px;
    height: .7rem;
    background: #fff;
    margin: 0 .4rem;
    /*transform: scaleX(.5);*/
  }

  .rule p {
    color: #fdd005;
    position: relative;
  }

  .rule img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: .58rem;
  }

  .content {
    background: #fff;
  }

  .content li {
    position: relative;
    width: 90%;
    margin: auto;
    height: .8rem;
    line-height: .8rem;
  }

  .content li:before {
    content: '';
    width: .76rem;
    height: 1rem;
    position: absolute;
    right: 0;
    background: url(../assets/allIcon.png) no-repeat;
    background-size: .8rem auto;
    background-position: left -4.2rem;
  }

  .content li .left {
    float: left;
    background: url(../assets/allIcon.png) left top no-repeat;
    background-size: .8rem auto;
    padding-left: 1.3rem;
  }

  .content li.review .left {
    background-position: left -1.12rem
  }

  .content li.info .left {
    background-position: left -2.2rem
  }

  .content li.pay-method .left {
    background-position: left -3.2rem
  }

  .content li .right {
    float: right;
    padding-right: 1rem;
  }

  .btn-submit {
    display: block;
    margin: auto;
    margin-top: 1.5rem;
    width: 92.5%;
    height: 1.6rem;
    line-height: 1.6rem;
    border-radius: 1.8rem;
    background: #b60005;
    font-size: .64rem;
    color: #fff;
  }

  .commit-region {
    position: fixed;
    bottom: 1rem;
    width: 100%;
  }
</style>

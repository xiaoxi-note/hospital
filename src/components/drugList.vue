<template>
  <div class="page-progress">
    <div class="content outer-drug">
      <div class="title" v-tap="{methods:showOuterList}">
        <span>馆外药方[{{outerDrug.length}}]</span>
      </div>
      <ul v-show="outerDrugShow" class="underline-thin">
        <li v-for="item in outerDrug" class="underline-thin">
          <div class="intro">
            <p class="date">
              <span class="left">盛实国医馆</span>
              <span class="right">{{(new Date(item.create_time)).format('yyyy-MM-dd')}}</span>
            </p>
            <div class="clear"></div>
            <p class="person" v-if="item.name">
              <span class="right">就诊人：{{item.name}}</span>
            </p>
            <div class="clear"></div>
          </div>
          <div class="detail">
            <span class="right">{{item.count}}剂</span>
            <a class="left" @click="goDrugDetail(item.id,item.img_uri)">处方</a>
            <a class="left" @click="goProgressDetail(item.id)">查看进度</a>
            <div class="clear"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content hospital-drug" v-if="!1">
      <div class="title underline-thin" v-tap="{methods:showHospitalList}">
        <span>医馆药方[{{hospitalDrug.length}}]</span>
      </div>
      <ul v-show="outerDrugShow" class="underline-thin">
        <li v-for="item in hospitalDrug" class="underline-thin">
          <div class="intro">
            <p class="date">
              <span class="left">盛实国医馆</span>
              <span class="right">{{(new Date(item.create_time)).format('yyyy-MM-dd')}}</span>
            </p>
            <div class="clear"></div>
            <p class="person" v-if="item.name">
              <span class="right">就诊人：{{item.name}}</span>
            </p>
            <div class="clear"></div>
          </div>
          <div class="detail">
            <span class="right">{{item.count}}剂</span>
            <a class="left">处方</a>
            <a class="left" @click="goProgressDetail(item.id)">查看进度</a>
            <div class="clear"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  //getDrugInfoList
  import {
    mapGetters
  } from 'vuex'
  import {
    GETDRUGINFOLIST
  } from '../store/type'
  import {Group, Cell, Alert} from 'vux'

  export default {
    name       : 'NAME',
    data () {
      return {
        hospitalDrugShow: true,
        outerDrugShow   : true,
        hospitalDrug    : [],
        outerDrug       : []
      }
    },
    components : {
      Group,
      Cell,
      Alert
    }, computed: {
      ...mapGetters([
        'getDrugInfoList'
      ])
    },
    created () {
      this.$store.dispatch(GETDRUGINFOLIST)
    },
    methods    : {
      goProgressDetail (id) {
        this.$router.push({
          name : 'progressDetail',
          query: Object.assign({id: id})
        })
      },
      goDrugDetail (id, imgUri) {
        this.$router.push({
          name : 'drugDetail',
          query: Object.assign({
            id : id,
            uri: imgUri
          })
        })
      },
      showHospitalList () {
        this.hospitalDrugShow = !this.hospitalDrugShow
      },
      showOuterList () {
        this.outerDrugShow = !this.outerDrugShow
      }
    },
    watch      : {
      getDrugInfoList(newValue){
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            this.hospitalDrug = response.data.other;
            this.outerDrug    = response.data.self;
          } else {
            this.$vux.alert.show({
              title  : '',
              content: response.errmsg,
            })
          }
        }
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .content li .intro {
    background: none;
    padding: .48rem 0 .24rem;
  }

  .page-progress {
    position: relative;
  }

  .content {
    background: #fff;
  }

  .hospital-drug {
    margin-bottom: .56rem;
  }

  .title {
    padding: .64rem 5%;
    text-align: left;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
  }

  .title:before {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 5%;
    background: url(../assets/allIcon.png) no-repeat left -4.2rem;
    background-size: .82rem auto;
    transform: rotate(90deg);
    /*background-position: center;*/
  }

  .title span {
    background: url(../assets/allIcon.png) no-repeat left -12.72rem;
    background-size: .8rem auto;
    padding-left: 1.4rem;
    font-size: .6rem;
  }

  .content ul {
    background: #fff;
  }

  .content li {
    width: 92.5%;
    margin: auto;
    padding: 0;
  }

  .content li:last-child:after {
    content: '';
    height: 0;
  }

  .intro {
    position: relative;
    width: 100%;
    padding: .5rem 0;
    margin: auto;
    color: #666;
    font-size: .7rem;
  }

  .intro:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px dashed #ccc;
    transform: scaleY(.5);
  }

  .intro .date span.left {
    font-size: .56rem;
    color: #333;
    line-height: 1.08rem;
  }

  .intro .date span.right {
    color: #333;
  }

  .detail {
    position: relative;
    padding: .5rem 0;
    font-size: .8rem;
    color: #222;
  }

  .detail a {
    color: #00a0e9;
    font-size: .6rem;
    margin-right: .7rem;
  }

  .content li p {
    line-height: .92rem;
  }

  .content li p span {
    font-size: .48rem;
    color: #666;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .clear {
    clear: both;
  }

  span.right {
    font-size: .6rem;
    margin-right: .7rem;
  }
</style>

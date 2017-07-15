<template>
  <div class="page-doctor-focus">
    <!--<tab defaultColor="#fff" active-color="#fff" :line-width="5" bar-active-color="#ed8083">-->
    <!--<tab-item selected @on-item-click="onItemClickOne">关注医生</tab-item>-->
    <!--<tab-item @on-item-click="onItemClickTwo">就诊医生</tab-item>-->
    <!--</tab>-->
    <ul class="doctor-focus underline-thin" v-show="doctorFocusShow">
      <li v-for="item in items" class="underline-thin">
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="14/69">
            <div class="flex-item left">
              <img v-if="item.doctInfo.photoLUrl" :src="item.doctInfo.photoLUrl" class="head">
              <img v-else src="../assets/user.jpg" class="head">
            </div>
          </flexbox-item>
          <flexbox-item :span="22/69">
            <div class="flex-item middle-left">
              <h2>{{item.doctInfo.name}}</h2>
              <p><span>{{item.doctInfo.title}}</span></p>
            </div>
          </flexbox-item>
          <flexbox-item :span="13/69">
            <div class="flex-item middle-right" @click="deleteFollowAction(item.doct_id,item.doctInfo.name)">
              <div>
                <img src="../assets/heart.png">
                <p>不再关注</p>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/5">
            <div class="flex-item right" @click="goOrder(item.doct_id)">
              <a class="btn-order">预约</a>
            </div>
          </flexbox-item>
        </flexbox>
      </li>
    </ul>
    <div v-if="items.length == 0" class="no-follow-info">
      无关注医生
    </div>
    <ul class="doctor-see underline-thin" v-show="!doctorFocusShow">
      <li v-for="item in items" class="underline-thin">
        <div class="doctor-info">
          <flexbox align="center" justify="space-between" :gutter="8">
            <flexbox-item :span="14/69">
              <div class="flex-item left">
                <img src="../assets/doctor.png">
              </div>
            </flexbox-item>
            <flexbox-item :span="25.5/69">
              <div class="flex-item middle">
                <h2>邓文卓</h2>
                <p><span>主任医师</span><span>心内科</span></p>
              </div>
            </flexbox-item>
            <flexbox-item :span="24/69">
              <div class="flex-item right">
                <a class="btn-order">预约</a>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="patient-info">
          <p>上次就诊时间：<span>2017-02-12</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {GETFOLLOW, DELETEFOLLOW} from '../store/type'
  import {Group, Cell, Alert, Tab, TabItem, Flexbox, FlexboxItem} from 'vux'

  export default {
    name      : 'NAME',
    data () {
      return {
        items          : [],
        doctorFocusShow: true
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem
    },
    computed  : {
      ...mapGetters([
        'getFollow',
        'deleteFollow',
      ])
    },
    created () {
      this.$store.dispatch(GETFOLLOW)
    },
    methods   : {
      onItemClickOne () {
        this.doctorFocusShow = true;
      },
      onItemClickTwo () {
        this.doctorFocusShow = false;
      },
      deleteFollowAction(id, doctName){
        var _this = this;
        this.$vux.confirm.show({
          title  : '',
          content: '不再关注' + doctName + '大夫？',
          // 组件除show外的属性
          onCancel () {

          },
          onConfirm () {
            _this.$store.dispatch(DELETEFOLLOW, {doctId: id})
          }
        })
      },
      goOrder (id) {
        this.$router.push({name: 'doctorInfo', query: {fromFollow: true, doctId: id}})
      }
    },
    watch     : {
      getFollow(newValue, oldVaue){
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.items = respose.data
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      },
      deleteFollow(newValue, oldVaue){
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.$vux.alert.show({
              title  : '',
              content: '已取消关注',
            })
            this.$store.dispatch(GETFOLLOW)
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-doctor-focus {
  }

  .vux-tab {
    height: 1.76rem;
    background: #b60005;
  }

  .vux-tab .vux-tab-item {
    background: none;
    height: 1.76rem;
    line-height: 1.76rem;
    font-size: .57rem
  }

  .vux-tab .vux-tab-ink-bar {
    bottom: 0;
  }

  .vux-tab .vux-tab-item.vux-tab-selected {
    background-color: #db0006;
  }

  .vux-tab-ink-bar {
    position: relative;
  }

  .vux-tab-ink-bar:after {
    content: 'xxxxx';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fdd005;
  }

  ul {
    background: #fff;
  }

  /*关注医生start*/
  .doctor-focus li, .doctor-see .doctor-info {
    overflow: hidden;
    width: 92.5%;
    margin: auto;
    padding: .52rem 0 .58rem;
  }

  .doctor-see .doctor-info {
    width: 100%;
  }

  ul li.underline-thin:last-child:after {
    content: '';
    height: 0;
  }

  ul li .left {
    text-align: center;
    width: 2.2rem;
    height: 2.2rem;
  }

  ul li .left img {
    display: block;
    width: 100%;
    border-radius: 100%;
  }

  ul li .left .date {
    background: #ddd;
    height: 1rem;
    line-height: 1rem;
  }

  ul li .left .week {
    line-height: 2rem;
    font-size: .9rem;
    font-weight: bold;
  }

  .doctor-focus li .middle-left span, .vux-flexbox-item span {
    font-size: .54rem;
    color: #666;
  }

  .doctor-focus li .middle-left h2, .vux-flexbox-item h2 {
    font-size: .62rem;
    color: #333;
    font-weight: 500;
  }

  .doctor-focus li .middle-left span:last-child, .vux-flexbox-item span:last-child {
    padding-left: .34rem;
  }

  .doctor-focus li .middle-right {
    text-align: center;
  }

  .doctor-focus li .middle-right img {
    display: block;
    width: .72rem;
    height: .64rem;
    margin: auto;
  }

  .doctor-focus li .middle-right p {
    color: #f39700;
    font-size: .56rem;
  }

  ul li .right .btn-order {
    display: table;
    width: 2.6rem;
    height: 1rem;
    line-height: 1rem;
    background: #f39700;
    text-align: center;
    border-radius: 1.2rem;
    color: #fff;
    font-size: .56rem;
    float: right;
  }

  /*关注医生end*/
  /*就诊医生start*/
  .doctor-see li {
    position: relative;
    overflow: hidden;
    width: 92.5%;
    margin: auto;
  }

  .patient-info {
    position: relative;
    height: 1.4rem;
    line-height: 1.4rem;
    color: #333;
    font-size: .54rem;
  }

  .patient-info:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px dashed #eee;
    transform: scaleY(.5);
  }

  .patient-info p {
    text-align: left;
  }

  /*就诊医生end*/

  .no-follow-info {
    height: 100%;
    position: absolute;
    width: 100%;
    padding-top: 8rem;
    font-size: 1rem;
    color: #999
  }
  .head{
    width: 2.2rem;
    height: 2.2rem;
  }
</style>

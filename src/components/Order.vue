<template>
  <div class="page-order">
    <header>
      <card>
        <div slot="content" class="card-demo-flex">
          <div class="vux-1px-r">全科</div>
          <div class="vux-1px-r">盛实国医</div>
          <div class="vux-1px-r down">
            <span v-tap="{methods:showDataPicker}">{{ getMounth() }}</span>
            <popup-picker :data="dateList"
                          v-model="dateDefault"
                          ref='dataPicker'
                          v-if="isShowDatePicker"></popup-picker>
          </div>
        </div>
      </card>
    </header>
    <div class="search-box">
      <div class="inner">
        <select>
          <option>北京</option>
          <option>上海</option>
        </select>
        <div class="search-input">
          <i></i>
          <input type="text" v-model='param.name' placeholder="搜索医生姓名">
        </div>
      </div>
    </div>
    <ul class="doctor-list underline-thin">
      <li v-for="item in showData"
          class="underline-thin"
          @click="goDoctDetail(item)"
          v-if="isShowDoct(item.id)">
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="1/5">
            <div class="flex-item left">
              <img v-if="item.photoLUrl" :src="item.photoLUrl" class="head">
              <img v-else src="../assets/user.jpg" class="head">
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-item middle">
              <h2>{{item.name}}</h2>
              <p>
                <span>{{item.title}}</span>
                <span>{{item.dept}}</span>
              </p>
              <p>{{item.clinicName}}</p>
              <p>
                <span>剩余号:</span>
                <span class="rest-order"
                      :style="{'color': item.limitWww != 0 ? '#f39700' : '#666'}">{{item.limitWww - item.bookingNum}}</span>
                <span>挂号费:</span>
                <span class="" :style="{'color': item.limitWww != 0 ? '#f39700' : '#666'}">￥{{item.fees}}</span>
              </p>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/5">
            <div class="flex-item right">
              <div class="btn-order" :style="{'background': item.limitWww != 0 ? '#f39700' : '#cccccc'}">预约</div>
            </div>
          </flexbox-item>
        </flexbox>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  import {mapGetters} from 'vuex'
  import {GET_ORDERINFOLIST} from '../store/type'
  import {Group, Cell, Alert, Card, Flexbox, FlexboxItem, Datetime, XButton, PopupPicker} from 'vux'
  export default {
    name      : 'order',
    data () {
      var today         = Date.now();
      var dateListArray = []

      var dateDefault = [(new Date(today + 86400000)).format('yyyy年MM月dd')];
      var defaultDate = (new Date(today + 86400000)).getTime();
      for (var i = 1; i < 6; i++) {
        dateListArray.push((new Date(today + 86400000 * i)).format('yyyy年MM月dd'));
      }
      return {
        isActive        : false,
        doctorInfoList  : [],
        dateDefault     : dateDefault,
        dateList        : [dateListArray],
        param           : {
          date: defaultDate,
          name: ''
        },
        isShowDatePicker: true,
        showData        : []
      }
    },
    computed  : {
      ...mapGetters([
        'getOrderInfoList'
      ])
    },
    components: {
      Group,
      Cell,
      Alert,
      Card,
      Flexbox,
      FlexboxItem,
      Datetime,
      XButton,
      PopupPicker
    },
    methods   : {
      showPlugin () {
        console.log(this)
        this.$vux.datetime.show({
          cancelText : '取消',
          confirmText: '确定',
          format     : 'YYYY-MM-DD HH',
          value      : '2017-05-20 18',
          onConfirm (val) {
            console.log('plugin confirm', val)
          },
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          }
        })
      },
      showDataPicker () {
        this.$refs.dataPicker.onClick();
      },
      getMounth(){
        return this.dateDefault[0].split('年')[1]
      },
      goDoctDetail (itemData){
        this.$router.push({
          name: "doctorInfo", query: {
            doctId      : itemData.id,
            limitWww    : itemData.limitWww,
            limitSurplus: itemData.limitWww - itemData.bookingNum
          }
        });
      },
      isShowDoct(id){
        var hideDoc = [2369, 2400, 2430]
        return hideDoc.indexOf(id) == -1
      }
    },
    created () {
      this.$store.dispatch(GET_ORDERINFOLIST, this.param)
    },
    watch     : {
      getOrderInfoList (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.doctorInfoList = respose.data
            this.showData       = this.doctorInfoList
          } else {
            this.$vux.alert.show({
              title  : '',
              content: respose.errmsg,
            })
          }
        }
      },
      dateDefault : {
        deep: true,
        handler () {
          var dateTimeStr = this.dateDefault[0].replace('年', '-').replace('月', '-')
          console.log(dateTimeStr)
          this.param.date = (new Date(dateTimeStr)).getTime();
          this.$store.dispatch(GET_ORDERINFOLIST, this.param)
        }
      },
      'param.name': {
        deep: true,
        handler () {
          var _showData = [];
          this.timer && (clearTimeout(this.timer), this.timer = null);
          this.timer = setTimeout(() => {
            [].forEach.call(this.doctorInfoList, (item, index) => {
              if (item.name.indexOf(this.param.name) > -1)
                _showData.push(item)
            })
            this.showData = _showData;
          }, 500)

        }
      },
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  .page-order {
    height: 100%;
  }

  header {
    position: relative;
    height: auto;
  }

  .card-demo-flex {
    display: flex;
    color: #fff;
    background: #990005;
    padding: 0 .5rem;
  }

  .card-padding {
    padding: 15px;
  }

  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: .56rem;
    height: 1.76rem;
    line-height: 1.76rem;
  }

  .card-demo-flex > div > span {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .weui-panel:before {
    border: none;
  }

  .vux-1px-r {
    position: relative;
    &:after {
      content: " ";
      height: .64rem;
      position: absolute;
      right: 0;
      top: 50%;
      width: 1px;
      border-right: 1px solid #fff;
      -webkit-transform-origin: 100% 0;
      transform-origin: 100% 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
      transform: translateY(-50%);
    }
    &:nth-child(3):after {
      display none
    }
  }

  .down
    position relative
    span
      font-size: .7rem !important;
      &:after
        display block
        content ''
        width 0
        height 0
        border-left 5px solid transparent
        border-right 5px solid transparent
        border-top 8px solid #fff
        position absolute
        top .7rem
        right .5rem

  .option {
    /*display: none;*/
    background: #fff;
    border-bottom: 1px solid #ccc;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .option li {
    width: 85.33%;
    line-height: 1.72rem;
    margin: auto;
    border-bottom: 1px solid #ccc;
    font-size: .48rem;
    text-align: left;
    color: #666;
    padding-left: .92rem;
  }

  .option li:last-child {
    border: none;
  }

  .search-box {
    position: relative;
    width: 100%;
    background: #fff;
  }

  .search-box:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }

  .search-box .inner {
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    margin: auto;
    position: relative;
  }

  .search-box select {
    position: absolute;
    width: 1.8rem;
    left: 0;
    top: 50%;
    font-size: .56rem;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    transform: translateY(-50%);
    outline: none;
    border: none;
    background: url(../assets/downMis.png) no-repeat right center;
    background-size: .4rem auto;
  }

  .search-box .search-input {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f7f7f7;
    width: 11rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 1.2rem;
    text-align: left;
    margin-left: .4rem;
  }

  .search-box .search-input i {
    position: absolute;
    left: .44rem;
    width: .68rem;
    height: .68rem;
    top: .28rem;
    background: url(../assets/searchBtn.png) no-repeat;
    background-size: .68rem auto;
    background-position: center;
  }

  .search-box .search-input input {
    background: none;
    outline: none;
    border: 0px;
    margin-left: 2rem;
  }

  .doctor-list {
    clear: both;
    background: #fff;
  }

  .doctor-list li {
    width: 92.5%;
    margin: auto;
    padding: .5rem 0 .7rem;
  }

  .doctor-list li.underline-thin:last-child:after {
    content: '';
    height: 0;
  }

  .doctor-list .flex-item {
    text-align: center;
    color: #fff;
  }

  .doctor-list .flex-item.middle {
    text-align: left;
  }

  .doctor-list .flex-item h2 {
    color: #333;
    font-size: .56rem;
    line-height: .88rem;
  }

  .doctor-list .flex-item > p {
    color: #666;
    line-height: .8rem;
    font-size: .48rem;
  }

  .doctor-list .flex-item .btn-order {
    width: 2.6rem;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    font-size: .56rem;
    border-radius: 1rem;
    float: right;
  }

  .doctor-list .flex-item.left img {
    width: 2.2rem;
    float: left;
  }

  .doctor-list .flex-item .rest-order {
    width: .9rem;
    display: inline-block;
  }

  .head
    border-radius: 1.1rem;
    width 2.2rem
    height 2.2rem
</style>

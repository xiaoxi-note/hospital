<template>
  <div class="page-doctor" v-if="orderData">
    <header>
      <div class="headCont">
        <span class="imgBg">
            <img v-if="orderData.photoSUrl" :src="orderData.photoSUrl" class="head">
            <img v-else src="../assets/user.jpg" class="head">
        </span>

      </div>
      <p class="name">{{orderData.name}}</p>
      <p class="type">{{orderData.title}}</p>
      <p class="room">{{orderData.dept}}</p>
    </header>
    <ul class="content underline-thin">
      <li class="underline-thin">
        <div class="area">
          出诊时间
        </div>
        <table>
          <tbody v-if='orderData'>
          <tr>
            <td></td>
            <td v-for="(item,index) in dateList">
              <span>{{getTime(item)}}</span>
              <br/>
              <span>{{getWeek(item)}}</span>
            </td>
          </tr>
          <tr>
            <td>上</td>
            <td v-for="keyStr in dateList"
                @click="order(dateOrderDataList[keyStr])"
                :class="{canChois:isNotFull(dateOrderDataList[keyStr], 1),canNotChois:isFull(dateOrderDataList[keyStr], 1)}">
              <div v-if="dateOrderDataList[keyStr].workTime == 1">
                <div v-if="dateOrderDataList[keyStr].limitWww - dateOrderDataList[keyStr].bookingNum <1"></div>
                <div v-else>
                  <span>预约</span>
                  <br/><span>剩余:{{dateOrderDataList[keyStr].limitWww - dateOrderDataList[keyStr].bookingNum}}</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>下</td>
            <td v-for="keyStr in dateList"
                @click="order(dateOrderDataList[keyStr])"
                :class="{canChois:isNotFull(dateOrderDataList[keyStr], 2),canNotChois:isFull(dateOrderDataList[keyStr], 2)}">
              <div v-if="dateOrderDataList[keyStr].workTime == 2">
                <div v-if="dateOrderDataList[keyStr].limitWww - dateOrderDataList[keyStr].bookingNum <1"></div>
                <div v-else>
                  <span>预约</span>
                  <br/><span>剩余:{{dateOrderDataList[keyStr].limitWww - dateOrderDataList[keyStr].bookingNum}}</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>晚</td>
            <td v-for="keyStr in dateList"
                @click="order(dateOrderDataList[keyStr])"
                :class="{canChois:isNotFull(dateOrderDataList[keyStr], 3),canNotChois:isFull(dateOrderDataList[keyStr], 3)}">
              <div v-if="dateOrderDataList[keyStr].workTime == 3">
                <div v-if="dateOrderDataList[keyStr].limitWww - dateOrderDataList[keyStr].bookingNum <1"></div>
                <div v-else>
                  <span>预约</span>
                  <br/><span>剩余:{{dateOrderDataList[keyStr].limitWww - dateOrderDataList[keyStr].bookingNum}}</span>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </li>
      <li class="underline-thin">
        <div class="skill">
          擅长
        </div>
        <p v-for="item in orderData.expert">{{item}}</p>
      </li>
      <li class="underline-thin">
        <div class="intro">
          <span>简介</span>
          <span v-if="isClose" v-tap="{methods:open}" class="drop">展开</span>
          <span v-else v-tap="{methods:close}" class="drop">收起</span>
        </div>
        <p v-if="isClose">{{orderData.briefIntro}}</p>
        <p v-else>{{orderData.briefIntro}}</p>
      </li>
    </ul>
    <footer>
    </footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import {
    mapGetters
  } from 'vuex'
  import {
    GET_ORDERINFOBYSTARTDATE
  } from '../store/type'
  import {
    Group,
    Cell,
    Alert,
    Card
  } from 'vux'

  export default {
    name      : 'NAME',
    data() {
      return {
        isClose          : true,
        canNotChois      : 'canNotChois',
        canChois         : 'canChois',
        orderData        : null,
        dateList         : [],
        dateOrderDataList: {}
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      Card
    },
    computed  : {
      ...mapGetters([
        'orderInfoByStartDate'
      ])
    },
    methods   : {
      open() {
        this.isClose = false
      },
      close() {
        this.isClose = true
      },
      goOrder() {
        this.$router.push({
          name: 'order'
        })
      },
      getTime(index) {
        var dateStr = (new Date(index)).format('MM.dd');
        if (/0/.test(dateStr)) {
          dateStr = dateStr.substr(1, dateStr.length);
        }
        return dateStr;
      },
      getWorkTime(workTime){
        var result = '';
        switch (workTime) {
          case  1:
            result = '上午';
            break;
          case  2:
            result = '下午';
            break;
          case  3:
            result = '晚间';
            break;
        }
        return result;
      },
      isNotFull(data, workTime) {
        if (data.workTime != workTime)
          return false;
        if (data.limitWww - data.bookingNum == 0)
          return false
        return true
      },
      isFull(data, workTime) {
        if (data.workTime != workTime)
          return false;
        if (data.limitWww - data.bookingNum > 0)
          return true
        return false
      },
      order(orderData) {
        this.$router.push({
          name : 'orderInfo',
          query: Object.assign({
              orderDate: orderData.date,
              day      : this.getWeek(orderData.date),
              workTime : this.getWorkTime(orderData.workTime),
              fees     : orderData.fees
            },
            this.$route.query)
        })
      }
    },
    created() {
      var today     = Date.now();
      var startDate = (new Date((new Date(today + 86400000)).format('yyyy-MM-dd'))).getTime();
      var endDate   = (new Date((new Date(today + 86400000 * 6)).format('yyyy-MM-dd'))).getTime();
      for (var i = 1; i < 6; i++) {
        var dayStr = (new Date(today + 86400000 * i)).format('yyyy-MM-dd');
        this.dateList.push(dayStr);
        this.dateOrderDataList[dayStr] = {};
      }
      console.log(this.dateList)
      var sendData = {
        docId    : this.$route.query.doctId,
        startDate: startDate,
        endDate  : endDate
      }
      this.$store.dispatch(GET_ORDERINFOBYSTARTDATE, sendData)
    },
    watch     : {
      orderInfoByStartDate(newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            console.log(respose.data);
            this.orderData = respose.data;
            //不同日期，分配
            [].forEach.call(respose.data.duty, (item) => {
              this.dateOrderDataList[item.date] = item;
            })
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
  .page-doctor {
  }

  .content {
    background: #fff;
  }

  table {
    position: relative;
    width: 100%;
    margin: .5rem 0;
    border-collapse: collapse;
    table-layout: fixed;
  }

  table:before {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    border: 1px solid #ff0007;
    transform: scale(.5);
    top: -50%;
    left: -50%;
    margin-top: -1px;
    margin-left: -1px;
  }

  table td {
    position: relative;
    height: 1.6rem;
    text-align: center;
    font-size: .52rem;
  }

  table td:before {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: scale(.5);
    top: -50%;
    left: -50%;
    margin-left: -1px;
    margin-top: -1px;
  }

  table tr:first-child td:fitst-child {
    color: #222;
  }

  table tr:first-child td span:fitst-child {
    font-size: .8rem;
  }

  table tr:first-child td span:last-child {
    font-size: .38rem;
    color: #999;
  }

  table tr:last-child td:before {
    content: '';
    border-bottom: none;
  }

  table tr td:last-child:before {
    content: '';
    border-right: none;
  }

  table tr td:first-child {
    width: 1.66rem;
    color: #222;
    font-size: .44rem;
  }

  td.canNotChois {
    background: #eee;
    color: #999;
  }

  td.canChois {
    background: #f39700;
    color: #fff;
  }

  td.canChois span:first-child {
    font-size: .56rem;
  }

  td.canChois span:last-child {
    font-size: .4rem;
  }

  img.head {
    margin-left: 0;
  }
</style>

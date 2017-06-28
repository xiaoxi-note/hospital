<template>
  <div class="page-order">
    <header>
      <card>
        <div slot="content" class="card-demo-flex">
          <div class="vux-1px-r" @click="tabToggle(1)">{{deptDefault}}</div>
          <div class="vux-1px-r" @click="tabToggle(2)">{{clinicDefault}}</div>
          <div class="" @click="tabToggle(3)">{{dateDefault}}</div>
        </div>
      </card>
      <div class="option" v-show="isCurrentOne">
        <ul>
          <li v-for="item in deptList" @click.stop="checkItem(1, $event)">{{item}}</li>
        </ul>
      </div>
      <div class="option" v-show="isCurrentTwo">
        <ul>
          <li v-for="item in clinicList" @click.stop="checkItem(2, $event)">{{item}}</li>
        </ul>
      </div>
      <div class="option" v-show="isCurrentThree">
        <ul>
          <li v-for="item in dateList" @click.stop="checkItem(3, $event)">{{item}}</li>
        </ul>
      </div>
    </header>
    <div class="search-box">
      <div class="inner">
        <select>
          <option>北京</option>
          <option>上海</option>
        </select>
        <div class="search-input">
          <i></i>
          <input type="" name="" placeholder="搜索医生姓名">
        </div>
      </div>
    </div>
    <ul class="doctor-list underline-thin">
      <li v-for="item in doctorInfoList" class="underline-thin">
        <flexbox align="center" justify="space-between" :gutter="8">
          <flexbox-item :span="1/5">
            <div class="flex-item left">
              <img src="../assets/doctor.png">
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
                <span>剩余费：</span>
                <span class="rest-order"
                      :style="{'color': item.limitWww != 0 ? '#f39700' : '#666'}">{{item.limitWww}}</span>
                <span>挂号费：</span>
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
  import {Group, Cell, Alert, Card, Flexbox, FlexboxItem} from 'vux'

  export default {
    name: 'order',
    data () {
      return {
        isActive: false,
        doctorInfoList: [],
        isCurrentOne: false,
        isCurrentTwo: false,
        isCurrentThree: false,
        deptDefault: '全科',
        clinicDefault: '盛实国医',
        dateDefault: '3月28',
        deptList: ['内科', '妇科', '肿瘤科'],
        clinicList: ['盛世国医', '儿童医院', '儿研所'],
        dateList: ['3月29', '3月30', '4月01'],
        parme: {
          date: '',
          searchKey: ''
        }
      }
    },
    computed: {
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
      FlexboxItem
    },
    ready () {
    },
    methods: {
      tabToggle (index) {
        switch (index) {
          case 1:
            return;
            this.isCurrentOne = true
            this.isCurrentTwo = false
            this.isCurrentThree = false
            break
          case 2:
            return;
            this.isCurrentOne = false
            this.isCurrentTwo = true
            this.isCurrentThree = false
            break
          case 3:
            this.isCurrentOne = false
            this.isCurrentTwo = false
            this.isCurrentThree = true
            break
        }
      },
      checkItem (index, event) {
        switch (index) {
          case 1:
            this.deptDefault = event.currentTarget.innerHTML
            this.isCurrentOne = false
            break
          case 2:
            this.clinicDefault = event.currentTarget.innerHTML
            this.isCurrentTwo = false
            break
          case 3:
            this.dateDefault = event.currentTarget.innerHTML
            this.isCurrentThree = false
            break
        }
        this.parme = {
          date: '',
          searchKey: event.currentTarget.innerHTML
        }
        this.$store.dispatch(GET_ORDERINFOLIST, this.parme)
      }
    },
    created () {
      this.parme = {
        date: '',
        searchKey: ''
      }
      this.$store.dispatch(GET_ORDERINFOLIST, this.parme)
    },
    watch: {
      getOrderInfoList (newValue, oldVaue) {
        if (newValue.status === 'success') {
          const respose = newValue.payload
          if (respose.errno === 0) {
            this.doctorInfoList = respose.data
          } else {
            this.$vux.alert.show({
              title: '',
              content: respose.errmsg,
            })
          }
        }
      }
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
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
  }

  .vux-1px-r:after {
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
    padding-right: .2rem;
  }
</style>

const sexData    = [{key: '0', value: '男'}, {key: '1', value: '女'}];
var unCheckToken = 'register,forgetPwd,DoctorAll'.split(',');
export default  {
  methods: {
    post (opt) {
      this.$http.get(opt.url).then(response => {
        opt.success(response.body)
      }, response => {
        opt.err && opt.err('')
      })
    },
    get (opt) {
      this.$http.get(opt.url).then(response => {
        opt.success(response.body)
      }, response => {
        // opt.error('')
      })
    },
    getSex (value) {
      var result = null;
      [].forEach.call(sexData, (item) => {
        if (item.key == value) {
          result = item
        }
      })
      return result.value;
    },
    getAge(birthday){
      var birthDate = new Date(birthday);
      var yearNum   = (new Date()).getFullYear();
      return yearNum - birthDate.getFullYear() + 1;
    },
    getPhone (yearStr) {
      var result     = [];
      var phoneArray = yearStr.split('');
      [].forEach.call(phoneArray, (item, index) => {
        if (index > 2 && index < 7) {
          result.push('*')
        } else {
          result.push(item)
        }
      })
      return result.join('');
    },
    getWeek(index) {
      var date = (new Date(index));
      var str  = "";
      var week = date.getDay();
      if (week == 0) {
        str = "日";
      } else if (week == 1) {
        str = "一";
      } else if (week == 2) {
        str = "二";
      } else if (week == 3) {
        str = "三";
      } else if (week == 4) {
        str = "四";
      } else if (week == 5) {
        str = "五";
      } else if (week == 6) {
        str = "六";
      }
      return '星期' + str;
    },
    back(){
      this.$router.go(-1);
    }
  },
  data(){
    return {
      sexList: sexData
    }
  },
  created () {
    console.log('router name', this.$route.name, Date.now())
    if (!this.$route.name) return;
    if (unCheckToken.indexOf(this.$route.name) == -1 && !this.$localStorage.get('token')) {
      this.$router.replace({name: 'login'})
    }
  }
}

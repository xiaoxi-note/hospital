webpackJsonp([23],{221:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(20),n=e(3),i=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s])}return o};t.default={name:"NAME",computed:i({},e.i(s.b)(["getInfo"])),data:function(){return{msgList:[]}},methods:{ogLogin:function(){this.$router.push({name:"login"})},goForgetPwd:function(){this.$router.push({name:"forgetPwd"})},getApiInfo:function(){this.$store.dispatch(n.a,{a:"sdfsdfsdf"})},goDoctorInfo:function(){this.$router.push({name:"doctorInfo"})},goDoctorMsg:function(){this.$router.push({name:"doctorMsg"})},goDoctorFocus:function(){this.$router.push({name:"doctorFocus"})},goRegister:function(){this.$router.push({name:"register"})},goLogin:function(){this.$router.push({name:"login"})},goOrder:function(){this.$router.push({name:"order"})},goOrderInfo:function(){this.$router.push({name:"orderInfo"})},goMyOrder:function(){this.$router.push({name:"myorder"})},goMyOrderInfo:function(){this.$router.push({name:"myorderinfo"})},goTinyPharmacy:function(){this.$router.push({name:"tinypharmacy"})},goAccountDoctor:function(){this.$router.push({name:"accountdoctor"})},goTinySickRoom:function(){this.$router.push({name:"tinysickroom"})}},ready:function(){console.log("ssss")},watch:{getInfo:function(o,t){"success"===o.status&&(console.log(JSON.stringify(o.payload)),this.msgList.push(JSON.stringify(o.payload)))}}}},251:function(o,t,e){t=o.exports=e(55)(),t.push([o.i,".to-login[data-v-6a74724a]{border:1px solid #999;font-size:20px;border-radius:10px;line-height:40px;height:40px;margin-top:20px}",""])},275:function(o,t,e){var s=e(251);"string"==typeof s&&(s=[[o.i,s,""]]),s.locals&&(o.exports=s.locals);e(56)("6c5016f2",s,!0)},314:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{},[e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.getApiInfo},expression:"{methods:getApiInfo}"}],staticClass:"to-login"},[o._v("get api data\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goRegister},expression:"{methods:goRegister}"}],staticClass:"to-login"},[o._v("注册\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goLogin},expression:"{methods:goLogin}"}],staticClass:"to-login"},[o._v("登录\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goForgetPwd},expression:"{methods:goForgetPwd}"}],staticClass:"to-login"},[o._v("忘记密码\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goDoctorFocus},expression:"{methods:goDoctorFocus}"}],staticClass:"to-login"},[o._v("名医关注\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goDoctorInfo},expression:"{methods:goDoctorInfo}"}],staticClass:"to-login"},[o._v("医生简介\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goDoctorMsg},expression:"{methods:goDoctorMsg}"}],staticClass:"to-login"},[o._v("医生预约信息\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goOrder},expression:"{methods:goOrder}"}],staticClass:"to-login"},[o._v("预约\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goOrderInfo},expression:"{methods:goOrderInfo}"}],staticClass:"to-login"},[o._v("预约信息\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goMyOrder},expression:"{methods:goMyOrder}"}],staticClass:"to-login"},[o._v("我的预约\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goMyOrderInfo},expression:"{methods:goMyOrderInfo}"}],staticClass:"to-login"},[o._v("我的预约情况\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goTinyPharmacy},expression:"{methods:goTinyPharmacy}"}],staticClass:"to-login"},[o._v("微药房\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goAccountDoctor},expression:"{methods:goAccountDoctor}"}],staticClass:"to-login"},[o._v("我的账户-医生\n  ")]),o._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:o.goTinySickRoom},expression:"{methods:goTinySickRoom}"}],staticClass:"to-login"},[o._v("微病房\n  ")]),o._v(" "),o._l(o.msgList,function(t,s){return e("div",[o._v("\n    "+o._s(s+1)+":"+o._s(t)+"\n  ")])})],2)},staticRenderFns:[]}},68:function(o,t,e){e(275);var s=e(0)(e(221),e(314),"data-v-6a74724a",null);o.exports=s.exports}});
webpackJsonp([5],{100:function(t,e,i){var n=i(99);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(56)("ecb7aa8a",n,!0)},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},103:function(t,e,i){var n=i(0)(i(105),i(110),null,null);t.exports=n.exports},104:function(t,e,i){i(108);var n=i(0)(i(106),i(109),null,null);t.exports=n.exports},105:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={};if(t["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var e=0;e<n.length;e++)t[n[e]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},106:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},107:function(t,e,i){e=t.exports=i(55)(),e.push([t.i,".vux-flexbox{width:100%;text-align:left;display:flex;display:-webkit-flex;box-align:center;align-items:center}.vux-flexbox .vux-flexbox-item{flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;flex-direction:row}",""])},108:function(t,e,i){var n=i(107);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(56)("0179151f",n,!0)},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},110:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},staticRenderFns:[]}},120:function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return a});var n=i(85),o={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].currentIndex=e,t[e].currentSelected&&(this.index=e)}}},props:{value:Number},watch:{currentIndex:function(t,e){e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!1),t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!0),this.$emit("input",t)},index:function(t){this.currentIndex=t},value:function(t){this.index=t}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},a={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(t){var e=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){e.$emit("on-item-click",e.currentIndex)})),!0===t&&i.i(n.a)(this.link,this.$router)}},watch:{currentSelected:function(t){t&&(this.$parent.index=this.currentIndex)},selected:function(t){this.currentSelected=t}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},122:function(t,e){t.exports="data:image/jpeg;base64,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"},134:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(120);e.default={name:"tab-item",mixins:[n.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},135:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(120);e.default={name:"tab",mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},146:function(t,e,i){e=t.exports=i(55)(),e.push([t.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#04be02;text-align:center}.vux-tab-ink-bar-transition-forward{transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;appearance:none}.vux-tab .vux-tab-item{display:block;flex:1;width:100%;height:100%;box-sizing:border-box;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#04be02;border-bottom:3px solid #04be02}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#04be02;margin:auto;height:100%;transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}",""])},153:function(t,e,i){var n=i(146);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(56)("6376787d",n,!0)},158:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v(t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]}},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)},staticRenderFns:[]}},170:function(t,e,i){var n=i(0)(i(134),i(158),null,null);t.exports=n.exports},171:function(t,e,i){i(153);var n=i(0)(i(135),i(160),null,null);t.exports=n.exports},216:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(20),o=i(3),a=i(86),l=i.n(a),r=i(96),c=i.n(r),s=i(19),d=i.n(s),u=i(171),f=i.n(u),p=i(170),g=i.n(p),h=i(104),b=i.n(h),m=i(103),x=i.n(m),I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e.default={name:"NAME",data:function(){return{items:[],doctorFocusShow:!0}},components:{Group:l.a,Cell:c.a,Alert:d.a,Tab:f.a,TabItem:g.a,Flexbox:b.a,FlexboxItem:x.a},computed:I({},i.i(n.b)(["getFollow","deleteFollow"])),created:function(){this.$store.dispatch(o.u)},methods:{onItemClickOne:function(){this.doctorFocusShow=!0},onItemClickTwo:function(){this.doctorFocusShow=!1},deleteFollowAction:function(t,e){var i=this;this.$vux.confirm.show({title:"",content:"不再关注"+e+"大夫？",onCancel:function(){},onConfirm:function(){i.$store.dispatch(o.t,{doctId:t})}})},goOrder:function(t){this.$router.push({name:"doctorInfo",query:{fromFollow:!0,doctId:t}})}},watch:{getFollow:function(t,e){if("success"===t.status){var i=t.payload;0===i.errno?this.items=i.data:this.$vux.alert.show({title:"",content:i.errmsg})}},deleteFollow:function(t,e){if("success"===t.status){var i=t.payload;0===i.errno?(this.$vux.alert.show({title:"",content:"已取消关注"}),this.$store.dispatch(o.u)):this.$vux.alert.show({title:"",content:i.errmsg})}}}}},269:function(t,e,i){e=t.exports=i(55)(),e.push([t.i,'.vux-tab[data-v-f0afce7c]{height:1.76rem;background:#b60005}.vux-tab .vux-tab-item[data-v-f0afce7c]{background:none;height:1.76rem;line-height:1.76rem;font-size:.57rem}.vux-tab .vux-tab-ink-bar[data-v-f0afce7c]{bottom:0}.vux-tab .vux-tab-item.vux-tab-selected[data-v-f0afce7c]{background-color:#db0006}.vux-tab-ink-bar[data-v-f0afce7c]{position:relative}.vux-tab-ink-bar[data-v-f0afce7c]:after{content:"xxxxx";position:absolute;top:0;left:50%;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fdd005}ul[data-v-f0afce7c]{background:#fff}.doctor-focus li[data-v-f0afce7c],.doctor-see .doctor-info[data-v-f0afce7c]{overflow:hidden;width:92.5%;margin:auto;padding:.52rem 0 .58rem}.doctor-see .doctor-info[data-v-f0afce7c]{width:100%}ul li.underline-thin[data-v-f0afce7c]:last-child:after{content:"";height:0}ul li .left[data-v-f0afce7c]{text-align:center;width:2.2rem;height:2.2rem}ul li .left img[data-v-f0afce7c]{display:block;width:100%;border-radius:100%}ul li .left .date[data-v-f0afce7c]{background:#ddd;height:1rem;line-height:1rem}ul li .left .week[data-v-f0afce7c]{line-height:2rem;font-size:.9rem;font-weight:700}.doctor-focus li .middle-left span[data-v-f0afce7c],.vux-flexbox-item span[data-v-f0afce7c]{font-size:.54rem;color:#666}.doctor-focus li .middle-left h2[data-v-f0afce7c],.vux-flexbox-item h2[data-v-f0afce7c]{font-size:.62rem;color:#333;font-weight:500}.doctor-focus li .middle-left span[data-v-f0afce7c]:last-child,.vux-flexbox-item span[data-v-f0afce7c]:last-child{padding-left:.34rem}.doctor-focus li .middle-right[data-v-f0afce7c]{text-align:center}.doctor-focus li .middle-right img[data-v-f0afce7c]{display:block;width:.72rem;height:.64rem;margin:auto}.doctor-focus li .middle-right p[data-v-f0afce7c]{color:#f39700;font-size:.56rem}ul li .right .btn-order[data-v-f0afce7c]{display:table;width:2.6rem;height:1rem;line-height:1rem;background:#f39700;text-align:center;border-radius:1.2rem;color:#fff;font-size:.56rem;float:right}.doctor-see li[data-v-f0afce7c]{position:relative;overflow:hidden;width:92.5%;margin:auto}.patient-info[data-v-f0afce7c]{position:relative;height:1.4rem;line-height:1.4rem;color:#333;font-size:.54rem}.patient-info[data-v-f0afce7c]:after{content:"";position:absolute;left:0;top:0;width:100%;border-bottom:1px dashed #eee;transform:scaleY(.5)}.patient-info p[data-v-f0afce7c]{text-align:left}.no-follow-info[data-v-f0afce7c]{height:100%;position:absolute;width:100%;padding-top:8rem;font-size:1rem;color:#999}.head[data-v-f0afce7c]{width:2.2rem;height:2.2rem}',""])},300:function(t,e,i){var n=i(269);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(56)("574bc3c6",n,!0)},302:function(t,e,i){t.exports=i.p+"static/img/doctor.7f1900c.png"},304:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NDUxNjQyQzMzNkQxMUU3OEU4MDk5OTlDNjRERENGOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NDUxNjQyRDMzNkQxMUU3OEU4MDk5OTlDNjRERENGOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTZEQjg5MzIwMDExRTc4RTgwOTk5OUM2NEREQ0Y5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTZEQjhBMzIwMDExRTc4RTgwOTk5OUM2NEREQ0Y5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++w3BQwAAAjVJREFUeNrMmE1IFVEUx+fdJDetihaSIK9aFAQF2kLduCr7WAhCVFSkuCmolT6QEEUkgmwVlCsrE0oL+4AIIiiQFrqQsBa2KD8XCrqI16fax+/AGRiG954zc/W9+cOPx8zcOfO/M/eee+5LpG87mVQOZ6AWkrAK0/AW7sGoE0wlcApqoAz+wiy8gUcw578h4TO0BW6pmUSOBz2ES7CY5brE6dA2m7O0WYabcAV+ZzK0DV7DgYC9/wJH4ZPvvLzR57AvYJx3cAy+yoFxjcHdEGZEO7UDJZ5z2+FVCDOiahh0vbiGmuC4E16l0KsdEvpgd4Q4h6DR/WRF/E7BDie6ToLE6beI8Rn2SJDDlmZE7WrIRrtkTBbpgLLVXmd9dMRozomLDhqdLXFR0mj+iYu2Gk3ncdGqGFqIkaF5MTQWI0MjYmgoRoYGxNADmImBmXF4IoZ+wUX4V0AzUn6cdQe16AW0FMjMitZf497VXnRDTeUzDXyDE/DYPWF8Dbq1DFnKg5mPslTAU+9Jk6HhSy2whjbwE3VBBUz4L5psCQrqoW6dZ+CILuZt3jo6iCFXz7S0uKZFeVSl4TJUwYdcDU2AYD+gVXs2EcHMe9ivO4w1J4wJOQgrdDMQVPf1rUwGvcGE7O13aIAL8GeNtrLfOgc/wzzARBwTPXA6h6lmuBolsLEYqLKXOp9hyUlpknXybcjRbU+n5/gOXLcJmMjyZ0MYbYJhKIZKy/RgvZdydByldEov2wb7L8AAZzVtBXNP69IAAAAASUVORK5CYII="},344:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-doctor-focus"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.doctorFocusShow,expression:"doctorFocusShow"}],staticClass:"doctor-focus underline-thin"},t._l(t.items,function(e){return n("li",{staticClass:"underline-thin"},[n("flexbox",{attrs:{align:"center",justify:"space-between",gutter:8}},[n("flexbox-item",{attrs:{span:14/69}},[n("div",{staticClass:"flex-item left"},[e.doctInfo.photoLUrl?n("img",{staticClass:"head",attrs:{src:e.doctInfo.photoLUrl}}):n("img",{staticClass:"head",attrs:{src:i(122)}})])]),t._v(" "),n("flexbox-item",{attrs:{span:22/69}},[n("div",{staticClass:"flex-item middle-left"},[n("h2",[t._v(t._s(e.doctInfo.name))]),t._v(" "),n("p",[n("span",[t._v(t._s(e.doctInfo.title))])])])]),t._v(" "),n("flexbox-item",{attrs:{span:13/69}},[n("div",{staticClass:"flex-item middle-right",on:{click:function(i){t.deleteFollowAction(e.doct_id,e.doctInfo.name)}}},[n("div",[n("img",{attrs:{src:i(304)}}),t._v(" "),n("p",[t._v("不再关注")])])])]),t._v(" "),n("flexbox-item",{attrs:{span:.2}},[n("div",{staticClass:"flex-item right",on:{click:function(i){t.goOrder(e.doct_id)}}},[n("a",{staticClass:"btn-order"},[t._v("预约")])])])],1)],1)})),t._v(" "),0==t.items.length?n("div",{staticClass:"no-follow-info"},[t._v("\n    无关注医生\n  ")]):t._e(),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.doctorFocusShow,expression:"!doctorFocusShow"}],staticClass:"doctor-see underline-thin"},t._l(t.items,function(e){return n("li",{staticClass:"underline-thin"},[n("div",{staticClass:"doctor-info"},[n("flexbox",{attrs:{align:"center",justify:"space-between",gutter:8}},[n("flexbox-item",{attrs:{span:14/69}},[n("div",{staticClass:"flex-item left"},[n("img",{attrs:{src:i(302)}})])]),t._v(" "),n("flexbox-item",{attrs:{span:25.5/69}},[n("div",{staticClass:"flex-item middle"},[n("h2",[t._v("邓文卓")]),t._v(" "),n("p",[n("span",[t._v("主任医师")]),n("span",[t._v("心内科")])])])]),t._v(" "),n("flexbox-item",{attrs:{span:24/69}},[n("div",{staticClass:"flex-item right"},[n("a",{staticClass:"btn-order"},[t._v("预约")])])])],1)],1),t._v(" "),t._m(0,!0)])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"patient-info"},[i("p",[t._v("上次就诊时间："),i("span",[t._v("2017-02-12")])])])}]}},64:function(t,e,i){i(300);var n=i(0)(i(216),i(344),"data-v-f0afce7c",null);t.exports=n.exports},85:function(t,e,i){"use strict";function n(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":o(t))||e&&"string"==typeof t&&!/http/.test(t)?"BACK"===t?e.go(-1):e.push(t):window.location.href=t}}e.a=n;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}},86:function(t,e,i){i(90);var n=i(0)(i(88),i(91),null,null);t.exports=n.exports},87:function(t,e,i){i(94);var n=i(0)(i(92),i(95),null,null);t.exports=n.exports},88:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},89:function(t,e,i){e=t.exports=i(55)(),e.push([t.i,'.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:flex;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{align-items:flex-start}.weui-cell__bd{flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.41176471em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.vux-blank-half:before{content:"\\2002";speak:none}.vux-blank-full:before{content:"\\2003";speak:none}.vux-no-group-title{margin-top:.77em}',""])},90:function(t,e,i){var n=i(89);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(56)("645ac2f5",n,!0)},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},92:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},93:function(t,e,i){e=t.exports=i(55)(),e.push([t.i,".vux-label-desc{font-size:14px;color:#666}",""])},94:function(t,e,i){var n=i(93);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(56)("089b8722",n,!0)},95:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},96:function(t,e,i){i(100);var n=i(0)(i(97),i(101),null,null);t.exports=n.exports},97:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(87),o=i.n(n),a=i(85),l=i(98);e.default={name:"cell",components:{InlineDesc:o.a},props:i.i(l.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&i.i(a.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},98:function(t,e,i){"use strict";e.a=function(){return{title:[String,Number],value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:[String,Object],valueAlign:[String,Boolean,Number],borderIntent:{type:Boolean,default:!0},disabled:Boolean,arrowDirection:String}}},99:function(t,e,i){e=t.exports=i(55)(),e.push([t.i,'.vux-tap-active{tap-highlight-color:transparent;user-select:none}.vux-tap-active:active{background-color:#ececec}.weui-cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:flex;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{align-items:flex-start}.weui-cell__bd{flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.41176471em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12) infinite;background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHBhdGggZmlsbD0nbm9uZScgZD0nTTAgMGgxMDB2MTAwSDB6Jy8+PHJlY3QgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjU2KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC0zMCknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDEwNS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjQzKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA3NS45OCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjM4KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2NSA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjMyKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTguNjYgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4yOCknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoMTUwIDU0LjAyIDY1KScvPjxyZWN0IHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyB4PSc0Ni41JyB5PSc0MCcgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwuMjUpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjIpJyByeD0nNScgcnk9JzUnIHRyYW5zZm9ybT0ncm90YXRlKC0xNTAgNDUuOTggNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xNyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTEyMCA0MS4zNCA2NSknLz48cmVjdCB3aWR0aD0nNycgaGVpZ2h0PScyMCcgeD0nNDYuNScgeT0nNDAnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsLjE0KScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtOTAgMzUgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4xKScgcng9JzUnIHJ5PSc1JyB0cmFuc2Zvcm09J3JvdGF0ZSgtNjAgMjQuMDIgNjUpJy8+PHJlY3Qgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHg9JzQ2LjUnIHk9JzQwJyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LC4wMyknIHJ4PSc1JyByeT0nNScgdHJhbnNmb3JtPSdyb3RhdGUoLTMwIC01Ljk4IDY1KScvPjwvc3ZnPgo=")}@-webkit-keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vux-cell-primary{flex:1}.vux-label{word-wrap:break-word;word-break:break-all}.vux-label,.weui-cell__ft .weui-loading{display:block}.weui-cell__ft.vux-cell-align-left{text-align:left}.weui-cell.vux-cell-no-border-intent:before{left:0}.weui-cell_access .weui-cell__ft.vux-cell-arrow-down:after{transform:matrix(.71,.71,-.71,.71,0,0) rotate(90deg)}.weui-cell_access .weui-cell__ft.vux-cell-arrow-up:after{transform:matrix(.71,.71,-.71,.71,0,0) rotate(-90deg)}.vux-cell-arrow-transition:after{transition:transform .3s}.vux-cell-disabled .vux-label{color:#b2b2b2}.vux-cell-disabled.weui-cell_access .weui-cell__ft:after{border-color:#e2e2e2}',""])}});
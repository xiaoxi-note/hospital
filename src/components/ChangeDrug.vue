<template>
  <div class="page-changedrug">
    <header>
    	<div class="head">
	    	<div class="upload">
	    		<div class="addimg">+</div>
	    		<div class="intro">
	    			<h2>上传处方照片</h2>
	    			<p>请确保图片内容清晰可见</p>
	    		</div>
	    	</div>
	    	<div class="check">
	    		<img src="../assets/check.png">
	    		<span>正在审核</span>
	    		<p>30分钟内完成审核，可在进度查询中查看</p>
	    	</div>
	    </div>
    	<div class="content">
    		<span class="status">示例</span>
    		<div class="sample-box">
    			<img src="../assets/sample.png">
    		</div>
    		<p class="p-tip">处方图片</p>
    	</div>
    </header>
    <footer>
    	<div class="agreement">
	      <input type="checkbox" name="">
	      <span>我已阅读并同意该协议</span> 
	    </div>
	    <a class="btn-submit">提&nbsp;交</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        
      }
    },
    components: {
      Group,
      Cell,
      Alert
    },
    ready () {
    },
    methods: {
      
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-changedrug{  
    /*position: relative;*/
  }
  header{
  	background: #fff;
  }
  .head{
  	position: relative;
  	padding: 1rem 2rem;
  	text-align: left;
  }
  .head:after{
  	content: '';
		position: absolute;
		height: 1px;
		width: 100%;
		left: 0;
		bottom: 0;
		transform: scaleY(.5);
		background: #ccc;
  }
  .upload{
  	/*display: none;*/
  }
  .upload .addimg{
  	display: inline-block;
  	vertical-align: middle;
  	width: 4rem;
  	height: 4rem;
  	line-height: 4rem;
  	border: 1px dashed #ccc;
  	border-radius: 3px;
  	font-size: 2rem;
  	font-weight: bold;
  	color: #ccc;
  	text-align: center;
  }
  .upload .intro{
  	display: inline-block;
  	vertical-align: middle;
  	margin-left: 1rem;
  }
  .upload .intro h2{
		color: #333;
		font-size: .9rem;
  }
  .upload .intro p{
  	color: #999;
  	font-size: .7rem;
  }
  .check{
  	display: none;
  	text-align: center;
  }
  .check img{
		display: block;
		width: 4rem;
		height: auto;
		margin: auto;
		margin-bottom: .5rem;
  }
  .check span{
  	color: #f39700;
  	font-size: .9rem;
  }
  .check p{
  	color: #999;
  	font-size: .7rem;
  	margin-top: .2rem;
  }
  .content{
  	position: relative;
  	padding: 1.5rem 2rem;
  }
  .content .sample-box{
  	width: 13rem;
  	height: 14rem;
  	background: #ccc;
  	border-radius: 3px;
  	margin: auto;
  }
  .content .sample-box img{
  	width: 100%;
  	height: 100%;
  }
  .content .p-tip{
  	color: #999;
  	font-size: .8rem;
  	margin-top: .5rem;
  }
  .content .status{
  	position: absolute;
  	left: 2rem;
  	top: 1.5rem;
  	font-size: 1rem;
  	color: #999;
  }
  footer{
    width: 100%;
    position: absolute;
    bottom: 2rem;
  }
  footer .agreement{
    position: relative;
    color: #999;
  }
  footer .agreement input{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  footer .agreement span{
    padding-left: 1rem;
  }
  footer .btn-submit{
    display: block;
    margin: auto;
    margin-top: .8rem;
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 2rem;
    background: #b60005;
    font-size: .9rem;
    color: #fff;
  }
</style>

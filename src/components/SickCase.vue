<template>
  <div class="page-order">
    <div class="search-box">
      <div class="inner">
        <select>
          <option>按时间</option>
          <option>按地点</option>
        </select>
        <div class="search-input">
          <i></i>
          <input type="" name="" placeholder="搜索患者姓名">
        </div>
      </div>
    </div>
    <div class="content">
    	<table>
        	<thead>
        		<th>
	            <td>就诊人</td>
	            <td>看诊时间</td>
	            <td>看诊记录</td>
	          </th>
        	</thead>
        	<tbody>
	          <tr>
	            <td>周红艳</td>
	            <td>3月28</td>
	            <td>暂无</td>
	          </tr>
	          <tr>
	            <td>周红艳</td>
	            <td>3月28</td>
	            <td>暂无</td>
	          </tr>
	          <tr>
	            <td>周红艳</td>
	            <td>3月28</td>
	            <td>暂无</td>
	          </tr>
	          <tr>
	            <td>周红艳</td>
	            <td>3月28</td>
	            <td>暂无</td>
	          </tr>
	          <tr>
	            <td></td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td></td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td></td>
	            <td></td>
	            <td></td>
	          </tr>
          </tbody>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Group, Cell, Alert, Card, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'NAME',
    data () {
      return {
        isActive: false,
        doctorList: [
          { type: 1, backgroundColor: '#f39700', color: '#f39700' },
          { type: 0, backgroundColor: '#cccccc', color: '#666' }
        ]
      }
    },
    computed: {
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
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .page-order{
    height: 100%;
  }
  .search-box{
    position: relative;
    width: 100%;
    background: #fff;
  }
  .search-box:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #cacaca;
    transform: scaleY(.5);
  }
  .search-box .inner{
    width: 90%;
    height: 3rem;
    margin: auto;
    position: relative;
  }
  .search-box select{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .search-box .search-input{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f7f7f7;
    width: 17rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 2rem;
    text-align: left;
  }
  .search-box .search-input i{
    position: absolute;
    left: .5rem;
    width: 1rem;
    height: 2rem;
    background: url(../assets/icon.png) no-repeat; 
    background-size: 1rem auto;
    background-position: center;
  }
  .search-box .search-input input{
    background:none;  
    outline:none;  
    border:0px;
    margin-left: 2rem;
  }
  .content{
  	background: #fff;
  	padding-top: 1rem;
  	padding-bottom: 2rem;
  }
  table{
    position: relative;
    width: 90%;
    margin: auto;
    border-collapse: collapse;
    /*table-layout: fixed;*/
  }
  table:before{
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    border: 1px solid #ff0007;
    transform: scale(.5);
    top: -50%;
    left: -50%;
  }
  table th{
  	display: table-row;
  }
  table td{
    position: relative;
    height: 2.5rem;
    text-align: center;
  }
  table td:before{
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: scale(.5);
    top: -50%;
    left: -50%;
  }
  table tr td:first-child,table th td:first-child,table tr td:nth-child(2),table th td:nth-child(2){
		width: 5rem;
  }
  table tr:last-child td:before{
    content: '';
    border-bottom: none;
  }
  table tr td:last-child:before,table th td:last-child:before{
    content: '';
    border-right: none;
  }
  table tr:nth-child(odd){
		background: #eff2f4;
  }
</style>

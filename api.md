# 盛实医馆 api 

### client

简介
    - 活动平台  API 文档
    - 所有请求 都 必须带 token （登录除外）



### response code 


#### errno ####
	0	 	操作成功
	911 	token 失效
	...


### server


  
1. ##### 登录接口 #####
   ###### 接口
    ``` url
    /api/login
    
    ```
    #### param ####
    ``` request
    * hpone:''
    * pwd:''
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: 
           	{
           		status:true,
           		token:''
           	}
         }
    ```
2. ##### 发送短息验证码 #####
   ###### 读取模板列表数据
    ``` url
    /api/sendMsgCode
    ```
    #### param ####
    ``` request
    * hpone:''
    ```
    #### response ####
    ```
        {
           errno:0, //901, 手机号已注册
           errmsg:'',
           data: {
             status:true,
           }
         }
    ```  
3. ##### 注册患者 #####
   ###### 注册患者
    ``` url
    /api/registerPatient
    ```
    #### param ####
    ``` request
    * phone: ''
    * checkCode: '' // 验证码
    * name: ''，
    * sex:'', // 0 女，1 男
    * idCard: '', //身份证号
    * 
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: {
           	status:'' //注册是否成功
           }
         }
    ```
4. ##### 注册医生 #####
   ###### 注册医生
    ``` url
    /api/registerPatient
    ```
    #### param ####
    ``` request
    * phone: ''
    * checkCode: '' // 验证码
    * name: ''，
    * sex:'', // 0 女，1 男
    * idCard: '', //身份证号
    * imgId:'' // ... 资质图片，对应code之后加
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: {
           	status:'' //注册是否成功
           }
         }
    ```
5. ##### 获取预约挂号医生列表 #####
   ###### 获取预约挂号医生列表
    ``` url
    /api/getOrderInfoList
    ```
    #### param ####
    ``` request
    * date: ''
    * searchKey:''
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: [
	          id:'',//医师id				name:'',//医师姓名				clinicId:'',//诊所id				title:'',//医师头衔				expert:'',//擅长				briefIntro:'',//简介				dept:'',//科室				fees:'',//诊费				workTime:'',//0:上午 1:下午2:夜间3:全天				limitAll:'',//当日最多可预约数				limitWww:'',//互联网最多可预约数				bookingNum:'',//已预约数				date:'',//出诊日期			]
        }
    ```
6. ##### 获取医生详细信息 #####
   ###### 获取医生详细信息
    ``` url
    /api/registerPatient
    ```
    #### param ####
    ``` request
    * docId: '' // 医生id
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: {
	          id	:'',//	医师id				name	:'',//	医师姓名				code	:'',//	医师资格证编码				mobile	:'',//	医师手机号				clinicId	:'',//	诊所id				gender	:'',//	性别；0 : 男  1 ： 女				birthday	:'',//	出生日期 ；“2001-03-21”				nation	:'',//	国籍				native	:'',//	籍贯				idType	:'',//	证件类型; 0:身份证;1:军官证;2:护照;3:台胞证;4:其他;9:无证件				idNo	:'',//	证件号码				title	:'',//	头衔				experts	:'',//	擅长				briefIntro	:'',//	医师简介				intro	:'',//	医师介绍				dept	:'',//	科室，分类				loginName	:'',//	系统登录名				address	:'',//	家庭住址				photoLUrl	:'',//	大头像地址				photoSUrl	:'',//	小头像地址				}
        }
    ```
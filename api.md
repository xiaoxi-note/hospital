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
	          id:'',//医师id
        }
    ```
6. ##### 获取医生详细信息 #####
   ###### 获取医生详细信息
    ``` url
    /api/getDoctInfoById
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
	          id	:'',//	医师id
        }
    ```
    
7. ##### 获取医生某个日期详细预约信息 #####
   ###### 获取医生某个日期详细预约信息
    ``` url
    /api/orderInfoWidthDateByDoctId
    ```
    #### param ####
    ``` request
    * docId: '' // 医生id
    * dateStart,''// 查询起始日期
    * dateEnd,''// 查询截止日期
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: [{
           	id	:'',//	医师id
        }
    ```
8. ##### 获取当前患者预约信息 #####
   ###### 查看当前患者预约信息
    ``` url
    /api/getOrderHistory
    ```
          
    #### response ####
    ```
        {
           errno:0,
           errmsg:'',
           data: [{
           	id	:'',//	预约编号
				}]
        }
    ```
    
 
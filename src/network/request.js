import Axios from "axios";
//import Vue from "vue";

//Vue.use(Axios)

export function request(config) {
  //创建axios 实例 ，并配置公有信息，即init Axios实例
  const instance = Axios.create ({
    baseURL : 'http://152.136.185.210:7878/api/m5',
    timeout : 5000
  })
  //请求拦截器， 拿到请求信息 处理完要返回请求信息
  //参数：两个函数，第一个拦截成功得回调函数，第二个失败
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  //响应拦截器，拿到响应信息，处理完要返回
   //参数：两个函数，第一个拦截成功得回调函数，第二个失败
   instance.interceptors.response.use(res => {
     
     return res.data
   }, err =>{
    console.log(err)
   })
   //发送网络请求
   return instance(config)
}

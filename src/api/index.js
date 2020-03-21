import Axios from 'axios';
const base = {
  home:'home',
  user:'user'
}
 Object.keys(base).forEach( item => {
  base[item] = base[item] + '/V1/'
});

const service = Axios.create({
  timeout:5000
});

service.interceptors.request.use(function(config){
    //在发送请求之前做某事
    console.log("拦截")
  // 是否显示loading
  //   app.$vux.loading.show({
  //     text: '数据加载中……'
  // });


    // config.method === 'post'  //将post请求jsonStringfy化
    // ? config.data = qs.stringify({...config.data})
    // : config.params = {...config.params};
    // 设置文本格式是键 值对象的形式
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    if(config.method == 'get')
    {
      config.params = {
        "_t":"dadvad",
        ...config.params
      }
      // config.params['_t'] = 'rgasrg';
    }
    console.log(config)  //单次请求的配置信息对象
    return config;  //只有return config后，才能成功发送请求
  },function(error){
    //请求错误时做些事
    return Promise.reject(error);
  })
//取消请求  多个请求取消管理参考  https://www.jianshu.com/p/22b49e6ad819
 /* let CancelToken = Axios.CancelToken
  let self = this
  axios.get('http://jsonplaceholder.typicode.com/comments', {
    cancelToken: new CancelToken(function executor(c) {
      self.cancel = c
      console.log(c)
      // 这个参数 c 就是CancelToken构造函数里面自带的取消请求的函数，这里把该函数当参数用
    })
  }).then(res => {
    this.items = res.data
  }).catch(err => {
    console.log(err)
  })


  //手速够快就不用写这个定时器了，点击取消获取就可以看到效果了
  setTimeout(function () {
    //只要我们去调用了这个cancel()方法，没有完成请求的接口便会停止请求
    self.cancel()
  }, 100)

//cancelGetMsg 方法跟上面的setTimeout函数是一样的效果，因为手速不够快，哦不，是因为网速太快，导致我来不及点取消获取按钮，数据就获取成功了
cancelGetMsg () {
  // 在这里去判断你的id 1 2 3，你默认是展示的tab1，点击的时候不管你上一个请求有没有执行完都去调用这个cancel()，
  this.cancel()
}
}
*/

import HomeApi from './home';
console.log(HomeApi);
const Home = HomeApi(service,base);

import User from './user';

export {
   Home,
   User
}
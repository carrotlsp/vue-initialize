import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');
    config.data = qs.stringify(config.data);
    // console.log(config);
    console.log(config.baseURL + config.url + '?'+ config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // if (response.data.errCode == 2) {
    //   router.push({
    //     path: "/login",
    //     querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {data:data}).then(response => {
        // console.log('resolve')
        resolve(response.data);
      }).catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装post请求
 * @param url
 * @param params
 * @returns {Promise}
 */

export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url,  {data:params})
      .then(response => {
        resolve(response.data);
      }).catch(err => {
        reject(err)
      })
  })
}
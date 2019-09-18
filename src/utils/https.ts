import axios from "axios";
import { Message } from 'element-ui';
import router from '../router';
import config from '../configs';

let https: any = {};
https = axios.create({
  baseURL: config.url,
  timeout: 50000
});

https.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("error: ", error);
    Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response: any) => {
    console.error("response: " + response);
    return response;
  },
  (error: any) => {
    const {response: {status}} = error;
    if(status >= 400 && status < 500) {
      Message({
        type: 'error',
        message: '授权失败！请重新登录试试！'
      });
      router.push({
        name: 'Login'
      })
    } else if(status >= 500) {
      Message({
        type: 'error',
        message: '服务器错误！'
      });
    } else {
      Message({
        type: 'error',
        message: '接口错误！'
      });
    }
    return Promise.reject(error);
  }
);

export default https;

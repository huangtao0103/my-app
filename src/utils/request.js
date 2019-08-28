/* global window */
import axios from 'axios'
import lodash from 'lodash'
import { message } from 'antd';
import qs from 'query-string'
import config from './config'

const fetch = (options,isHave) => {
  let {
    method = 'get',
    data,
    url,
  } = options
  const cloneData = lodash.cloneDeep(data)
  const token = window.sessionStorage.getItem('token') || "123";
  if(token) {
    axios.defaults.headers.common['Authorization']=`Bearer ${token}`
  }
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: {
          ...cloneData,
          t: new Date().getTime()
        },
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request (url, options) {
  const {silence = false, ...params} = options || {};

  return fetch({url, ...params}).then((response) => {
    // const { statusText, status } = response
    let resultData = response.data

    if (silence) {
      return Promise.resolve(resultData)
    }

    const { code, msg } = resultData

    if (code !== 0) {
      message.error(msg)
      return Promise.resolve(resultData);
    }
    /* eslint-disable */
    return Promise.resolve(resultData)
  }).catch((error) => {
    /* eslint-disable */
    const { data, status } = error.response
    if(status === 401) {
      // message.error('登录状态已失效，请重新登录')
      // console.log(error.response)
      const returnUrl = window.location.origin + "/queue/#/queue";
      window.location.href = `${config.signupUrl}?forwardTo=${encodeURIComponent(returnUrl)}`
    } else if (!silence) {
      message.error(data.msg || data.message || "服务器异常")
    }
    return Promise.resolve({ ...data })
  })
}

import http from '@/utils/http.js'

//首页接口 //api/index/getIndexData
const getIndexData = (params) => {
  return http.getJson('/api/index/getIndexData', params)
    .then(res => res.data)
}


export default {
  getIndexData
}

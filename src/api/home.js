// import Axios from 'axios'

export default function (axios, base) {
  return {
    getDetail: (params) => {
      console.log('进入到axis');
      return axios.get(`${base.home}base/data`, params);
    },
    getMockData: (params) => {
      return axios.get('/news/list')
    },
    getMockData2: (params) => {
      return axios.post('/news/list2', params)
    },
    postMockData: () => {
      return axios.post('/news/index02')
    }
  }
}

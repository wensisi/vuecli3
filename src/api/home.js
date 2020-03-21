// import Axios from 'axios'

export default function(axios,base)  {
      return { getDetail:(params) => {
            console.log('进入到axis');
          return  axios.get(`${base.home}base/data`,params);
        },
        getMockData:() => {
          return axios.get('/home/data')
        }
      }
  
}
var axios = require('axios');
let token = localStorage.getItem('token');

var api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 200000,
  headers: {
    common: {
      Authorization: 'Bearer ' + token,
    }
  }
});


api.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status == 401) {
    window.location = '/giris';
  }
  return Promise.reject(error);
});

export default api;

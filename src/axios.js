import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://glgkkyip.api.lncld.net/1.1/classes/takeoutapp',
  headers: {
    'X-LC-Id': 'glgkkyipyC9rILlMgDATQp7J-gzGzoHsz',
    'X-LC-Key': 'YqKSkQAQI6p8b4oxdhmiHqP5',
    'Content-Type': 'application/json'
  }
});

export default instance

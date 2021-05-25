import axios from 'axios';
import config from './config';

axios.defaults.baseURL = config.api.baseURL;

export default {
  async getHealth() {
    return await axios
      .request({
        method: 'get',
        url: '/health',
      })
      .then((response) => response.data)
      .catch(() => null);
  },
};

import axios from 'axios';

let config = {};

export const loadConfig = async () => {
  await axios
    .request({
      method: 'get',
      url: 'config.json',
    })
    .then(({ data }) => {
      config = data;
      config._loaded = true;
    })
    .catch(() => null);
  return config;
};

export const getConfig = () => {
  if (config._loaded) {
    return config;
  }
  return loadConfig();
};

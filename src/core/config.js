let config = {};

export const loadConfig = async () => {
  const response = await fetch('/config.json');
  config = await response.json();
  config._loaded = true;
  return config;
};

export const getConfig = () => {
  if (config._loaded) {
    return config;
  }
  return loadConfig();
};

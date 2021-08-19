let config = {};

export const loadConfig = async () => {
  const config = await fetch('/config.json');
  return config;
};

export const getConfig = () => {
  if (config._loaded) {
    return config;
  }
  return loadConfig();
};

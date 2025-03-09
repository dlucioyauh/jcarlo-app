const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  
  // Preserva as configurações existentes para SVG
  const { assetExts, sourceExts } = config.resolver;
  
  config.resolver = {
    ...config.resolver,
    assetExts: [...assetExts.filter(ext => ext !== 'svg'), 'png', 'jpg', 'jpeg', 'gif'],
    sourceExts: [...sourceExts, 'svg'],
  };
  
  return config;
})();
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['dynamic-import-node']
});
require('./src/server');

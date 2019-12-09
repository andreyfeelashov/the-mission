const autoprefixer = require('autoprefixer');
const postCssNested = require('postcss-nested');

module.exports = {
  modules: true,
  plugins: [autoprefixer, postCssNested]
};

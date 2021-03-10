const path = require('path');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(withSass());

module.exports = {
 sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
 },
};

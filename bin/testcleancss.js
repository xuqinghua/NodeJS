var CleanCSS = require('clean-css');
var source = 'a{font-weight:bold;}';
var minimized = new CleanCSS().minify(source);
console.log(minimized);
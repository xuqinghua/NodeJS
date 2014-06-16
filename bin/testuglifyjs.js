var fs = require('fs');
var path = require('path');
var UglifyJS = require("uglify-js");

var result = UglifyJS.minify("var b = function () {};                                   var x='DDD';function ccc(x){                alert('x'+bbbb)}", {fromString: true});
console.log(typeof result.code);
console.log(result.code);
/*//var jsp = require("uglify-js").parser;
var pro = require("uglify-js").uglify;

console.log(UglifyJS);
var orig_code;
var pathname = path.resolve('bin/httptest.js');
console.log(pathname);
orig_code = fs.readFileSync(pathname);
// var orig_code = 'var x="DDD";function ccc(x){alert("x"+bbbb)}';
console.log(orig_code.toString('utf-8'));
//var ast = orig_code
var ast = UglifyJS.parse(orig_code); // parse code and get the initial AST
ast = UglifyJS.pro.ast_mangle(ast); // get a new AST with mangled names
ast = pro.ast_squeeze(ast); // get an AST with compression optimizations
var final_code = pro.gen_code(ast); // compressed code here

fs.writeFile("httptest-min.js", final_code, function(err){
	if(err){
		console.log(err);
	}
});*/
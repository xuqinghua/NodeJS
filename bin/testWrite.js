var fs = require('fs');
fs.readFile('data2.txt',function(err,data){
	if(err){
		console.log(err);
	}else{
		fs.writeFile('data2.txt', data + ' \n' +'Hello, World!111', function (err) {
		     if (err)
		       throw err;
		});
	}

});

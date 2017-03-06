var less = require('less');
var fs = require('fs');

console.log('hi');

fs.readFile('less/test.less',(err,data) => {
	if(err) return false;
	console.log('begin read!');

	less.render(data.toString(),(err,output) => {
		if(err) return false;
		debugger;
		fs.writeFile('css/test.css',output.css,(err) => {
			if(err) return false;

			console.log('write done!');
		})

	})
})

console.log('ok');
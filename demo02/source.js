"use strict"

var getTime = function(){
	return new Promise((resove,reject) => {
		setTimeout(() => {

			var now = Date.now();

			if(now%2===0)
				resove(now);
			else
				reject(now);

		},500)

	})
} 


async function print(){
	console.log(Date.now());
	var t = await getTime().catch( (err) => {
		console.log(`ERROR:${err}`);
		return false;
	});
	console.log(`DONE:${t}`);

}

print();
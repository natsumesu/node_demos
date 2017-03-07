function getTime(){
	var promise = new Promise((resolve,reject) => {
		var now = Date.now();
		setTimeout(() => {
			if(now%2==0){
				resolve(now);
			}else{
				reject(now);
			}
		},500)
	});
	return promise;
}

getTime().then(n => {
	console.log(`OK:${n}`);
}).catch( n => {
	console.log(`Error:${n}`)
});
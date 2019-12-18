function demoFunc(a,b){
	let x = a;
	let y = b;
	if(x>y){
	x = (x-y)
	}
	if(x<y){
	y = (y-x)
	}
	if (x === y){
		console.log(x,y)
		return x
	}
	return demoFunc(x,y)
}

demoFunc(2437,875)
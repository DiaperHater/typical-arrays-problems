
function min (array) {

	if(array === undefined || array.length === 0){
		return 0;
	}

	let nMin = array[0];
	array.forEach((n)=>{
		if(n < nMin){
			nMin = n;
		}
	});

	return nMin;
}

function max (array) {
  if(array === undefined || array.length === 0){
		return 0;
	}

	let nMax = array[0];
	array.forEach((n)=>{
		if(n > nMax){
			nMax = n;
		}
	});

	return nMax;
}

function avg (array) {
  return 0;
}

exports.min = min;
exports.max = max;
exports.avg = avg;

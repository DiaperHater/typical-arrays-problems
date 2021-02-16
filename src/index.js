
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
  return 0;
}

function avg (array) {
  return 0;
}

exports.min = min;
exports.max = max;
exports.avg = avg;

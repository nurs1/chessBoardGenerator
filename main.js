
function myChess(n){
	let desk = new Array(n);
	for(let i = 0; i < n; i += 1){
		desk[i] = new Array(n);
	}
	let w = 0
	for(let i = 0; i < n; i += 1){
		for(let j = 0; j < n; j += 1){
			if(j == 0){
				if(i % 2 == 0){
					desk[i][j] = 0;
					w = 0;
				}else{
					desk[i][j] = 1;
					w = 1;
				}
			}else{
				desk[i][j] = w;
			}
			w ^= 1;
		}
	}
	let res = '';
	for(let i = 0; i < n; i += 1){
		res += desk[i];
		res += '\n';
	}
	return res;
}
	
console.log(myChess(12));

var rand_grid = [];
// for(let i = 0; i < 9; i++)
// 	rand_grid[i] = randArray();

// for(let x = 0; x < 9; x++)
// 	for(let y = 0; y < 9; y++){
// 		rand = Math.floor(Math.random() * 9) + 1;
// 		if(checkColumn(x, y, rand))
// 			rand_grid[x][y] = rand;
// 		else{
// 			if(!checkRow(x, y, rand))
// 				rand_grid[x][y] = "_";
// 			y--;
// 		}
// 	}

// function randArray(){
// 	array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 	var tmp, current, top = array.length;
// 	if(top) 
// 		while(--top) {
// 		    current = Math.floor(Math.random() * (top + 1));
// 		    tmp = array[current];
// 		    array[current] = array[top];
// 			array[top] = tmp;
// 		}
// 	return array;
// }

// function checkRow(x, y, rand){
// 	//console.log("In Check");
// 	for(let i = 0; i < 9; i++)
// 		if(rand_grid[x][i] === rand)
// 			return false;
// 	return true;
// }

// function checkColumn(x, y, rand){
// 	//console.log("In Check");
// 	for(let i = 0; i < 9; i++)
// 		if(rand_grid[i][y] === rand)
// 			return false;
// 	return true;
// }

var test = [1,2,3,4,5,6,7,8,9];
var temp = test;//shuffle(test);
for(let i = 0; i < 9; i++){
	if(i === 0){
		rand_grid[i] = test;
		console.log(test);
	}
	else if(i === 1){
		temp = [test[3], test[4], test[5], test[6], test[7], test[8], test[0], test[1], test[2]];
		rand_grid[i] = temp;
	}
	else if(i === 2){
		temp = [temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[0], temp[1], temp[2]];
		rand_grid[i] = temp;
	}
	else if(i === 3){
		temp = [temp[4], temp[5], temp[6], temp[7], temp[8], temp[0], temp[1], temp[2], temp[3]];
		rand_grid[i] = temp;
	}
	else if(i === 4){
		temp = [test[4], test[5], test[6], test[7], test[8], test[0], test[1], test[2], test[3]];
		rand_grid[i] = temp;
	}
	else if(i === 5){
		temp = [test[7], test[8], test[0], test[1], test[2], test[3], test[4], test[5], test[6]];
		rand_grid[i] = temp;
	}
	else if(i === 6){
		temp = [temp[4], temp[5], temp[6], temp[7], temp[8], temp[0], temp[1], temp[2], temp[3]];
		rand_grid[i] = temp;
	}
	else if(i === 7){
		temp = [temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[0], temp[1], temp[2]];
		rand_grid[i] = temp;
	}
	else if(i === 8){
		temp = [temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[0], temp[1], temp[2]];
		rand_grid[i] = temp;
	}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
console.log(rand_grid);
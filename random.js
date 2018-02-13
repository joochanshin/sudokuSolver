var rand_grid = [];
for(let i = 0; i < 9; i++)
	rand_grid[i] = randArray();

function randArray(){
	array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	var tmp, current, top = array.length;
	if(top) 
		while(--top) {
		    current = Math.floor(Math.random() * (top + 1));
		    tmp = array[current];
		    array[current] = array[top];
			array[top] = tmp;
		}
	return array;
}

console.log(rand_grid);
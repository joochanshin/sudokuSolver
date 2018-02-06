function horiz(num, grid){	
	for(let y = 0; y < 9; y++){
        for(let x = 0; x < 9; x++){
            	//console.log(num, grid[(x) + (y)*9])
            if(num == grid[(x) + (y)*9]){
            	console.log("In horizIf " + grid[(x) + (y)])
            	return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
            
        }
    }
}
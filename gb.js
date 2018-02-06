//	First row
//	----------------------------------------------------------------------------------------------

function first1(num, grid){   //  First GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 3){
            	//console.log(num, grid[(x) + (y)*9])
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

function second1(num, grid){   //  Second GB in first row
	//console.log(num, grid);
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 3){
            	if(num == grid[(x) + (y)*9])
            		return true;

                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

function third1(num, grid){   //  Third GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 3){
            	if(num == grid[(x) + (y)*9])
            		return true;

                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

//	Second row
//	----------------------------------------------------------------------------------------------

function first2(num, grid){   //  First GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

function second2(num, grid){   //  Second GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

function third2(num, grid){   //  Third GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

//	Third row
//	----------------------------------------------------------------------------------------------

function first3(num, grid){   //  First GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

function second3(num, grid){   //  Second GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

function third3(num, grid){   //  Third GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
            	if(num == grid[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
            }
        }
    }
}

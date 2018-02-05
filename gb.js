//	First row
//	----------------------------------------------------------------------------------------------

function first1(num){   //  First GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 3){
            	//console.log(num, grid1[(x) + (y)*9])
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function second1(num){   //  Second GB in first row
	//console.log(num);
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 3){
            	if(num == grid1[(x) + (y)*9])
            		return true;

                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function third1(num){   //  Third GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 3){
            	if(num == grid1[(x) + (y)*9])
            		return true;

                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

//	Second row
//	----------------------------------------------------------------------------------------------

function first2(num){   //  First GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function second2(num){   //  Second GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function third2(num){   //  Third GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

//	Third row
//	----------------------------------------------------------------------------------------------

function first3(num){   //  First GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function second3(num){   //  Second GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function third3(num){   //  Third GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
            	if(num == grid1[(x) + (y)*9])
            		return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

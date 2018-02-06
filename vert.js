function vert1(num, grid){	
	let x = 0;
	//console.log("In vert1");
    for(let y = 0; y < 9; y++){
        //console.log(num, grid[(x) + (y)*9])
        if(num == grid[(x) + (y)*9]){
            //console.log("In vertIf " + grid[(x) + (y)*9]);
            return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
        }    
    }  
}

function vert2(num, grid){	
	let x = 1;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
        	return true;
}

function vert3(num, grid){	
	let x = 2;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}

function vert4(num, grid){	
	let x = 3;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}

function vert5(num, grid){	
	let x = 4;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}

function vert6(num, grid){	
	let x = 5;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}


function vert7(num, grid){	
	let x = 6;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}


function vert8(num, grid){	
	let x = 7;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}

function vert9(num, grid){	
	let x = 8;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;  
}

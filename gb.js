//	First row
//	----------------------------------------------------------------------------------------------

function first1(){   //  First GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 3){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function second1(){   //  Second GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 3){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function third1(){   //  Third GB in first row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 3){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

//	Second row
//	----------------------------------------------------------------------------------------------

function first2(){   //  First GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function second2(){   //  Second GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function third2(){   //  Third GB in second row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 6 && Math.floor(y%9 + 1) > 3){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

//	Third row
//	----------------------------------------------------------------------------------------------

function first3(){   //  First GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 2 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function second3(){   //  Second GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 5 && x%9 > 2 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

function third3(){   //  Third GB in third row
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            if(x%9 <= 8 && x%9 > 5 &&  Math.floor(y%9 + 1) <= 9 && Math.floor(y%9 + 1) > 6){
                console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);
            }
        }
    }
}

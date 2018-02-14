var grid1 = "_6_3__8_4537_9_____4___63_7_9__51238_________71362__4_3_64___1_____6_5231_2__9_8_".split("");
var grid2 = "_2_456789457_8_236689237_4___5362974274_9_6533965748___4_618397761_4_528938725_6_".split("");
var globalGrid = "";
var keys = document.getElementsByClassName("keys");


function setGrid(grid){//   Makes grid and the boxes
    for(let i = 0; i < 81; i++){
        var key = document.createElement("div");
        key.style.width = "50px";
        key.style.height = "50px";
        key.style.border = "2px solid black";
        key.style.marginRight = "3px";
        key.style.marginBottom = "3px";
        key.style.display = "inline-block"
        key.style.textAlign = "center";
        //key.style.verticalAlign = "middle";   //  Figured out this is not needed
        key.style.lineHeight = "50px";
        key.setAttribute("class", "keys");
        document.getElementById('top').appendChild(key);
    }
    drawGrid(grid);
    //drawGB();
}

function drawGrid(grid){//  prints out text onto the boxes
    let index = 0;
    for(let i = 0; i < 81; i++)
        keys[i].innerHTML = grid[i];
}

function drawGB(){ //   to see 3x3 grids
    var gb = document.getElementById("_green_");
    for(let i = 0; i < 9; i++){
        var gbi = document.createElement("div");
        gbi.style.width = "168px";
        gbi.style.height = "168px";
        gbi.style.border = "2px dashed green";
        gbi.style.display = "inline-block";
        gbi.style.zIndex = "1";
        gbi.setAttribute("class", "greens");
        document.getElementById("_green_").appendChild(gbi);
    }
}

function makeGrid(grid){
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i = 0; i < 81; i++)
        if(grid[i] === "_")
            grid[i] = array;
    return grid;
}


/*
//  For first 3x3 box: gb1 (Green box 1)
    if(i%9 <=2)                     //X
    if(Math.floor(i/9 + 1) <= 3)    //Y

//  For second 3x3 box: gb2 (Green box2)
    if(i%9 > 3 && i%9 <= 5)         //X
    if(i)
*/

//  For testing purposes
function _try_(){
    for(let x = 0; x < 9; x++){
        for(let y = 0; y < 9; y++){
            console.log("X: " + x + " Y: " + y + " Value: " + grid1[(x) + (y)*9]);//    This is to access the values in an array
        }
    }
}

function _button_ (){
    globalGrid = randGrid();
    drawGrid(globalGrid);
}

function _solve_ (){
    for(let i = 0; i < 7; i++)
        anotherOne();
}

function anotherOne(){
    let tempGrid = solver(solver(solver(solver(makeGrid(globalGrid)))));
    var tempCounter = 0;
    var notSolved = true;
    //console.log(tempCounter);
    for(let i = 0; i < 81; i++){
        if(tempGrid[i].length > 1){
            console.log("In if statement");
            tempGrid[i] = tempGrid[i][0];
            break;
        }
        else{
            console.log("In else statement");
        }
    }
    
    //tempGrid = solver(solver(solver(solver(makeGrid(tempGrid)))));
    drawGrid(tempGrid);
}


function remove(array, element) {
    return array.filter(e => e !== element);
}

var empt = " ";
for(let i = 0; i < 81; i++)
    empt += " ";


setGrid(empt);
//setGrid(solver(solver(solver(makeGrid(grid2)))));
//setGrid(solver(solver(solver(makeGrid(grid2)))));
//setGrid(solver(makeGrid(grid1)));

















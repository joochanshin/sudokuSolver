var grid1 = "_6_3__8_4537_9_____4___63_7_9__51238_________71362__4_3_64___1_____6_5231_2__9_8_";
var grid2 = "_2_456789457_8_236689237_4___5362974274_9_6533965748___4_618397761_4_528938725_6_";
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
    drawGB();
}

function drawGrid(grid){//  prints out text onto the boxes
    let index = 0;
    for(let i = 0; i < 81; i++){
        keys[i].innerHTML = grid[i];
    }
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

function solver(){
    var crook = [];
    let x = 0;
    let y = 0;
    for(let i = 0; i < 81; i++){
        x = i%9;
        y = (Math.floor((i/9) + 1));
        console.log("X: " + x + " Y: " +  y + " Value: " + grid1[i]);
    }
}

setGrid(grid1);

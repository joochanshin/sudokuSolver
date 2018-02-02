var grid1 = "_6_3__8_4537_9_____4___63_7_9__51238_________71362__4_3_64___1_____6_5231_2__9_8_";
var grid2 = ["_2_456789457_8_236689237_4___5362974274_9_6533965748___4_618397761_4_528938725_6_"];
var keys = document.getElementsByClassName("keys");


function setGrid(grid){
    for(let i = 0; i < 81; i++){
        var key = document.createElement("div");
        key.style.width = "50px";
        key.style.height = "50px";
        key.style.border = "2px solid black";
        key.style.marginRight = "3px";
        key.style.marginBottom = "3px";
        key.style.display = "inline-block"
        key.style.textAlign = "center";
        key.style.verticalAlign = "bottom";
        key.style.lineHeight = "50px";
        key.setAttribute("class", "keys");
        document.getElementById('top').appendChild(key);
    }
    drawGrid(grid);
}

function drawGrid(grid){
    let index = 0;
    for(let i = 0; i < 81; i++){
        keys[i].innerHTML = grid[i];
    }
}

setGrid(grid1);

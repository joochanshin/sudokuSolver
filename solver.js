function solver(grid){
    var crook = [];
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let x = 0;
    let y = 0;
    for(let i = 0; i < 81; i++){
        x = i%9;                        //  This is to get the X value
        y = (Math.floor((i/9) + 1));    //  This is to get the Y value
        if(grid[i] === "_"){
            grid[i] = array;
        
            for(let j = 1; j < 10; j++){//Start of forloop for GB
                //  First three GBs
                if(x <= 2 &&  y <= 3)
                    if(first1(j, grid))
                        grid[i] = remove(grid[i], j);
                if(x <= 5 && x > 2 &&  y <= 3)
                    if(second1(j, grid))
                        grid[i] = remove(grid[i], j);
                if(x <= 9 && x > 5 &&  y <= 3)
                    if(third1(j, grid))
                        grid[i] = remove(grid[i], j);
                //  Second three GBs
                if(x <= 2 &&  y <= 6 && y > 3)
                    if(first2(j, grid))
                        grid[i] = remove(grid[i], j);
                if(x <= 5 && x > 2 &&  y <= 6 && y > 3)
                    if(second2(j, grid))
                        grid[i] = remove(grid[i], j);
                if(x <= 9 && x > 5 &&  y <= 6 && y > 3)
                    if(third2(j, grid))
                        grid[i] = remove(grid[i], j);
                //  Third three GBS
                if(x <= 2 &&  y <= 9 && y > 6)
                    if(first2(j, grid))
                        grid[i] = remove(grid[i], j);
                if(x <= 5 && x > 2 &&  y <= 9 && y > 6)
                    if(second2(j, grid))
                        grid[i] = remove(grid[i], j);
                if(x <= 9 && x > 5 &&  y <= 9 && y > 6)
                    if(third2(j, grid))
                        grid[i] = remove(grid[i], j);
            }//End of forloop for GB
        }
    }   //  End of first forloop1
    for(let i = 0; i < 81; i++){
        x = i%9;                        //  This is to get the X value
        y = (Math.floor((i/9) + 1));    //  This is to get the Y value
        if(grid[i].length > 1){
            //console.log("in if")
            for(let inx = 0; inx < grid[i].length; inx++){
                //console.log(grid[i][inx]);
                if(y == 1)
                    if(horiz1(grid[i][inx], grid)){
                        //console.log("index is " + inx);
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                        //console.log("");
                    }
                if(y == 2)
                    if(horiz2(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 3)
                    if(horiz3(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 4)
                    if(horiz4(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 5)
                    if(horiz5(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 6)
                    if(horiz6(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 7)
                    if(horiz7(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 8)
                    if(horiz8(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
                if(y == 9)
                    if(horiz8(grid[i][inx], grid)){
                        grid[i] = remove(grid[i], grid[i][inx]);
                        inx--;
                    }
            }
        }
        console.log("X: " + x + " Y: " +  y + " Value: " + grid[i]); // To just see the values of the grid in X and Y format
    }
}



























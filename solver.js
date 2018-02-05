function solver(){
    var crook = [];
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let x = 0;
    let y = 0;
    for(let i = 0; i < 81; i++){
        x = i%9;                        //  This is to get the X value
        y = (Math.floor((i/9) + 1));    //  This is to get the Y value
        if(grid1[i] === "_"){
            grid1[i] = array;
        
            for(let j = 1; j < 10; j++){
                //  First three GBs
                if(x <= 2 &&  y <= 3)
                    if(first1(j))
                        grid1[i] = remove(grid1[i], j);
                if(x <= 5 && x > 2 &&  y <= 3)
                    if(second1(j))
                        grid1[i] = remove(grid1[i], j);
                if(x <= 9 && x > 5 &&  y <= 3)
                    if(third1(j))
                        grid1[i] = remove(grid1[i], j);
                //  Second three GBs
                if(x <= 2 &&  y <= 6 && y > 3)
                    if(first2(j))
                        grid1[i] = remove(grid1[i], j);
                if(x <= 5 && x > 2 &&  y <= 6 && y > 3)
                    if(second2(j))
                        grid1[i] = remove(grid1[i], j);
                if(x <= 9 && x > 5 &&  y <= 6 && y > 3)
                    if(third2(j))
                        grid1[i] = remove(grid1[i], j);
                //  Third three GBS
                if(x <= 2 &&  y <= 9 && y > 6)
                    if(first2(j))
                        grid1[i] = remove(grid1[i], j);
                if(x <= 5 && x > 2 &&  y <= 9 && y > 6)
                    if(second2(j))
                        grid1[i] = remove(grid1[i], j);
                if(x <= 9 && x > 5 &&  y <= 9 && y > 6)
                    if(third2(j))
                        grid1[i] = remove(grid1[i], j);
            }
        }
        console.log("X: " + x + " Y: " +  y + " Value: " + grid1[i]); // To just see the values of the grid in X and Y format
    }
}
# sudokuSolver.js

This is a simple sudoku solver I am trying to create through Javascript.

## Getting Started

For some reason you would like to test this out, here are some instructions.

### Caveat

This program has only been tested on Chrome browsers. Unsure of the functionality on other browsers. 

### Download

Simply press the "Clone or download" green button and click "Download ZIP"

### How To Open File

You can either double click the HTML file or right-click it and open to see on specific browser

-or-

Run a localhost of your choosing

## Running Tests

Just a few documentatons of my journey through trials and error

### Styling

Setting up the table was not very difficult. But it was annoying to center the text vertically and horizontally. 

This is how it looked at first (with temporary template)
<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS1.png">
</p>

and after inserting
```
key.style.textAlign = "center";
```
it then looked like

<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS2.png">
</p>

After playing around with a few lines of code I ended up having
```
key.style.verticalAlign = "middle";
key.style.lineHeight = "50px";
```
but ended up realizing that
```
key.style.verticalAlign = "middle";
```
was not needed
<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS3.png">
</p>

Further more, I added a green dashed lines to better see the divions of 3x3 grids

<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS4.png">
</p>

But because I was not thinking... I made a giant forloop that loops 81 times instead of having a nested forloops that prints 9by9.

Because of this, I needed to convert the current box to Cartesian coordinates (X and Y).

```
 let x = 0;
    let y = 0;
    for(let i = 0; i < 81; i++){
        x = i%9;
        y = (Math.floor((i/9) + 1));
        console.log("X: " + x + " Y: " +  y + " Value: " + grid1[i]);
    }
```

This is part of the output on the console:

<p align="center">
  <img width="700" height="800" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS5.png">
</p>

## Solver

In order for me to really try fully grasp how to solve this, I tried to break it down into very basic steps. 

## GB

I wanted to to loop through each GB first which is each 3x3 box. 

And if the element is empty, then replace it with an array.

I have
```
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
and then the code 
```
if(grid1[i] === "_")
  grid1[i] = array;
```
To replace each empty spot with an array with all numbers. This is to temporarily hold all possible values. I want to search through each GB to see if one of the number is in there. If it is, the certain element cannot have that value. So this is then removed as a possible value. 

For example: in the example grid I have, the first GB has the values:
```
_ 6 _
5 3 7
_ 4 _
```

Next I will show what happens. 

In my `solver.js` file, I have this code to check the first set of GBs: 
```
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
```

and an example of a GB search code is essentially:
```
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
```

Which then outputs this:
<p align="center">
  <img width="700" height="800" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS6.png">
</p>

## Horizontal

I sorta knew how to approach this but did not know how to execute it. I wanted to check each horizontal line to see if there are any matches and then take out the matched number. But I thought I can do it through a single if statement, which was very incorrect.

Instead of 
```
if(grid1[i] === "_")
```
I had
```
if(grid[i].length > 1)
 ```
checking if the current index had more than one element. I tried to do `isArray` but it did not work the way I wanted and when I tried `typeof grid[i] === "object"` it returned that all elements were an object.

I then iterated through the forloop
```
for(let inx = 0; inx < grid[i].length; inx++)
```
because I am only checking the numbers in the array of grid[i] and not all possible values which is why I did not do 
```
for(let inx = 0; inx < 10; inx++)
```

Inside this forloop, I had this If statement
```
if(y == 1)
  if(horiz1(grid[i][inx], grid))
    grid[i] = remove(grid[i], grid[i][inx])
```
This is to go through each Y, which is going through each horizontal line and checking if there is a value that matches `grid[i][inx]`. 

And in my horiz.js file, I have a function for each horizontal line
```
function horiz1(num, grid){	
	let y = 0;
    for(let x = 0; x < 9; x++){
        //console.log(num, grid[(x) + (y)*9])
        if(num == grid[(x) + (y)*9]){
            //console.log("In horizIf " + grid[(x) + (y)*9])
            return true;
                //console.log("X: " + x + " Y: " + y + " Value: " + grid[(x) + (y)*9]);
        }    
    }  
}
```
The `console.log()s` helped tremendously in terms of debugging, but more on that later.

This basically goes through every X element while y is at a constant value. Then going through each element in this row where `num` is `grid[i][inx]`.

### Some debugs

I was trying to `grid[i] = remove(grid[i], inx)` and was wondering why this was not working. A lot of problems were rising and that was because value 8 is in index 2, and for some reason `2` was being removed from the array. I thought it was an index problem but I was taking out the index from the array, so I then replaced the code with `grid[i] = remove(grid[i], grid[i][inx])` which did what I want to do.

Other problems I ran across would be where the If statement should go and when. I thought the position of the If statements and forloops were in the best place. This was figured out through a lot of debugging and a whole bunch of `console.log()` everywhere. 

Even the horiz.js file's functions had problems. I made it go through the whole 81 elements and not just the row. Also, it kept returning `true` because I was comparing `num` to essentially itself. 

### Result

In the end, this is what I ended up with:

<p align="center">
  <img width="600" height="800" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS7.png">
</p>

### Edit

I am sorry. I realized that the earlier code didn't take out ALL the elements in the array that fund a match because after removing an element in an array, the index skips to the next one. I found this error when Y = 2. So then I commented out all the other if statements and only checked when Y = 2. 

Putting a whole bunch of `console.log()s` into the horiz2 function to see if `num == grid[(x) + (y)*9]`

And when it did, it wouldn't do it for the second element because it skipped it.

I then fixed this problem by having
```
if(y == 2)
    if(horiz2(grid[i][inx], grid)){
	grid[i] = remove(grid[i], grid[i][inx]);
	inx--;
    }
```
Which then resets the index back to where it should be and this works fine. 

Which results in this:
<p align="center">
  <img width="600" height="800" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS8.png">
</p>
Use this screenshot and the earlier one right before the edit while looking at the grid to see the differences and the fixes.

## Vertical

This part did not take very long. I reused a lot of the same functions as I did with horiz.js and changed very few things.

Such as
```
if(x == 0)
    if(vert1(grid[i][inx], grid)){
	grid[i] = remove(grid[i], grid[i][inx]);
	inx--;
    }
```
and
```
function vert2(num, grid){	
    let x = 1;
    for(let y = 0; y < 9; y++)
        if(num == grid[(x) + (y)*9])
            return true;
}
```

Other than this, I surrounded all the `if(x == 0)` statements with a `if(y == 1)` statement so it does not run twice.

This is the following result:
<p align="center">
  <img width="600" height="800" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS9.png">
</p>

# HUGE EDIT

So I realized that my code was NOT working the way I wanted it to... 

When I put the results out on the grid, this is what it looked like:

<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS12.png">
</p>

And this obviously did not work. If you look at Y = 8, GB = 7, then you can see that there are multiple `8`s. It took several commenting out code and `console.log()`ing to figure out the issue which was in my GB forloop. 
```
if(x <= 2 &&  y <= 9 && y > 6)
    if(first2(j, grid))
	grid[i] = remove(grid[i], j);
if(x <= 5 && x > 2 &&  y <= 9 && y > 6)
    if(second2(j, grid))
	grid[i] = remove(grid[i], j);
if(x <= 9 && x > 5 &&  y <= 9 && y > 6)
    if(third2(j, grid))
	grid[i] = remove(grid[i], j);
```
Do you see the problem?
Let me show the solution
```
if(x <= 2 &&  y <= 9 && y > 6)
    if(first3(j, grid))
	grid[i] = remove(grid[i], j);
if(x <= 5 && x > 2 &&  y <= 9 && y > 6)
    if(second3(j, grid))
	grid[i] = remove(grid[i], j);
if(x <= 9 && x > 5 &&  y <= 9 && y > 6)
    if(third3(j, grid))
	grid[i] = remove(grid[i], j);
```
I was calling `first2`, `second2`, and `third2` instead of `first3`, `second3`, and `third3`.

This fixed all errors thus far.

Which then gives the grid:
<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS10.png">
</p>

## Edit \#2
This is just editing the error in the last grid. It was another spelling error and calling a function wrong.
Fixed, and here are results:
<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS11.png">
</p>

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

### GB

I wanted to to loop through each GB first which is each 3x3 box. 

And if the element is empty, then replace it with an array.

I have
```
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
and then the code 
```
if(grid1[i] === "_"){
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

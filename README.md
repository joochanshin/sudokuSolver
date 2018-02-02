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
<p align="center">
  <img width="700" height="700" src="https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS5.png">
</p>

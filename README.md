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
![alt text](https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS1.png) <!-- .element height="50%" width="50%" -->

and after inserting
```
key.style.textAlign = "center";
```
it then looked like
![alt text](https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS2.png)

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
![alt text](https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS3.png)

Further more, I added a green dashed lines to better see the divions of 3x3 grids
![alt text] (https://raw.githubusercontent.com/joochanshin/sudokuSolver/master/ScreenShots/SS4.png)

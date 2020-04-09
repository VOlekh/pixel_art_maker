# Pixel Art Maker Project

## Table of Contents

* [Project Description](#project_description)
* [Project Specification](#project_specification)
* [Contributing](#contributing)
* [Code Description](#code_description)

## Project Description

To get started, open `designs.js` and start building out the app's functionality.

Build a single-page web app that allows users to draw pixel art on a customizable canvas.
Users should be able to:

- Dynamically set the size of the table as an N by M grid. 
- Choose a color. 
- Click a cell in the grid to fill that cell with the chosen color.

## Project Specification 

- The user can create a canvas of any (reasonable) size. 
- Entering whole numbers in the "Height" and "Width" fields, and submitting the form, causes an empty grid to appear on the page. 
- The user can color the pixels in the grid. 
- Choosing a color from the color selector and clicking on a grid square causes that grid square (and only that square) to change color. - Event listeners are properly added to the grid squares (and not to the border or the table itself). 
- The user can reset the grid to a blank state. 
- If there are already colored squares in the grid, clicking the Submit button clears them out.



## Contributing

The script.js JavaScript code works with the provided HTML and CSS files. The script.js file is properly linked to the HTML file, and loading the HTML file shows the correct functionality for the application.

## Code Description
 Work with file designs.js.


**Description:** 
- make clear up grid function, withot this new grid will be added below the old one.
Tipps: the same can be made by Element.innerHTML (or jQuery's .html())


```
function clearGrid(){
    //To remove all children from an element:
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    };
    };
```
_________________________________________________    

**Description:** 
- makeGrid() functions set the size of the grid as an _N_ by _M
grid with the user input
- use of getElementById to retrieve the inputs
- inside makeGrid() used 2 more functions clearGrid() and colorCell()
   - clearGrid() described above
   - colorCell() got the color value from user and applied it the cell ("td")

**Tipp:** 
- could use document.querySelector('#someElementId') to achieve the same effect


```
function makeGrid(event){
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    //clear grid call function
    clearGrid();
    for (let row = 0; row < height; row++) {
        let newRow = document.createElement("tr");  
        table.appendChild(newRow);
            for (let cell = 0; cell < width; cell++){
                let newCell = document.createElement("td");
                //Each cell should have an event listener that sets the background color of the cell to the selected color.
                newCell.addEventListener('click', colorCell)
                newRow.appendChild(newCell); 
            }
        }
        event.preventDefault();
    };
 ```
 ___________________________________________________
    
    
**Description:** 
- use a submit event listener and preventing the page from reloading.  

```
submitForm.addEventListener('submit', makeGrid);
```
_____________________________________________________

**Description:**  
- colorCell() got the color value from user and applied it the cell ("td")


```
function colorCell (event) {
    let color = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = color;
    event.preventDefault();
  };

```

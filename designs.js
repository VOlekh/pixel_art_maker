//For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored 
const submitForm = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');


//Make clear grid function
function clearGrid(){
    //To remove all children from an element:
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    };
    };
    

//Set the size of the cross stitch canvas as an _N_ by _M_ grid with the makeGrid() function
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
submitForm.addEventListener('submit', makeGrid);
  


//Make color cell function
function colorCell (event) {
    let color = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = color;
    event.preventDefault();
  };


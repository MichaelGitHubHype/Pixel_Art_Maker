// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const width = document.getElementById('inputHeight').value;
    const height = document.getElementById('inputWidth').value;

    for (let row = 0; row < width; row++) {
        var x = document.getElementById('pixelCanvas').insertRow(row);
        for (let column = 0; column < height; column++) {
            x.insertCell(column);
        };
    };
};
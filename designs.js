class PixelArt {
    constructor() {
        this.color = document.getElementById('colorPicker');
    }
    makeGrid() {
        this.deleteGrid();
        let width = document.getElementById('inputHeight').value;
        let height = document.getElementById('inputWidth').value;
    
        for (let row = 0; row < width; row++) {
            var x = document.getElementById('pixelCanvas').insertRow(row);
            for (let column = 0; column < height; column++) {
                var z = x.insertCell(column);
                z.addEventListener("click", function () {
                    this.setAttribute("style", `background-color: ${color.value}`)
                })
            };
        };
        var table = document.getElementById("pixelCanvas");
        table.deleteRow(-1)
    };

    deleteGrid() {
        var table = document.getElementById("pixelCanvas");
        for(var i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }
    }
    
}

let pixels = new PixelArt();


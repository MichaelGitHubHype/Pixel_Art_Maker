// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const width = document.getElementById('inputHeight').value;
    const height = document.getElementById('inputWidth').value;

    for (let rows = 0; rows < width; rows++) {
        for (let columns = 0; columns < height; columns++) {
            var node = document.createElement("div");
            node.setAttribute('class', 'grid')
            document.getElementById('container').appendChild(node);
        };
    };
    $(".grid").width(480/width);
    $(".grid").height(480/height);
};



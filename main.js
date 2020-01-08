
var gridArea = document.getElementById("main")
var rndcolour = Math.floor(Math.random()*16777215).toString(16);
var tip = 1
grid = 16



for( var i = 0; i <= grid; i++){
    var row = document.createElement("div");
    row.classList  = "row";
    for( x = 1; x<=grid;x++) {
        var cell = document.createElement("div")
        cell.classList = "gridsquare";
        row.appendChild(cell)
    }
    gridArea.appendChild(row)      
}

var box = document.querySelectorAll('.gridsquare')

box.forEach( box => {
    box.addEventListener("mouseover",hoverChange)
    })

function hoverChange() {
    if (tip === 1) {
    this .classList.add('onhover');
    }
    else if (tip  === 2){
        this .style.background = rndcolour;
    }
  }

function clearChange() {
    box.forEach( box => { 
        box.classList.remove('onhover')
    })
 }

 var clear = document.getElementById("reset")
 clear.addEventListener("click",clearChange)
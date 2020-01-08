
var gridArea = document.getElementById("main")
var tip = 1
grid = 16

creategrid()

function changetip() { 
    if (tip ===1) {
        tip = 2
       }
    else if (tip === 2) {
        tip = 1
       }
    else return
}


function resizegrid(){
    var newsize = prompt("New grid length and height?",)
    grid = newsize
    document.getElementById('main').innerHTML = ""
    creategrid()
}

function creategrid() {
    for( var i = 0; i < grid; i++){
        var row = document.createElement("div");
        row.classList  = "row";
        for( x = 0; x<grid;x++) {
            var cell = document.createElement("div")
            cell.classList = "gridsquare";
            row.appendChild(cell)
        }
        gridArea.appendChild(row)      
    }
}

var box = document.querySelectorAll('.gridsquare')

box.forEach( box => {
    box.addEventListener("mouseover",hoverChange)
    })

function hoverChange() {
    if (tip === 1) {
    this  .style.background = 'black';;
    }
    else if (tip  === 2){
        var rndcolour = Math.floor(Math.random()*16777215).toString(16);
        this .style.background = '#'+rndcolour;
    }
  }

function clearChange() {
    box.forEach( box => { 
        box.style.background = 'white'
    })
 }

 var clear = document.getElementById("reset")
 clear.addEventListener("click",clearChange)


 var resize = document.getElementById("resize")
 resize.addEventListener("click",resizegrid)

 var colourtoggle = document.getElementById("clrchange")
 colourtoggle.addEventListener("click",changetip)

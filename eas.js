const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).id = "grid-item" +c;
  };
};

makeRows(16, 16);

document.onmouseover = function(e) {

  var targ;
  if (!e) {var e = window.event}
  if (e.target.id != 'container') {
  if (e.target.id) {targ = e.target}
  //else (e.srcElement) {targ = e.srcElement}
  if (targ.nodeType == 3) {// defeat Safari bug
      targ = targ.parentNode;
  }


  targ.style.backgroundColor = 'green';
  return
}


}

// reset the grid to original status
function resetGrid(){
  while(container.firstChild){
      container.removeChild(container.firstChild);
  }
}

//event listeners to reset the grid
let btn = document.getElementById("button");
btn.addEventListener("click", () =>{
  resetGrid();
  let boxnum = prompt("Please enter a number between 1 and 100.")
  if (boxnum > 100 | boxnum < 1) {
    boxnum = prompt("No numbers larger than 100 or less than 1. Please enter a number between 1 and 100!");
    makeRows(boxnum,boxnum);
  }
  else {
  makeRows(boxnum,boxnum);
  }
});



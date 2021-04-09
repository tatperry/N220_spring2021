
// mouse over div function 
document.getElementById("fire").addEventListener("mouseover", mouseOver);
// mouse out of div function 
document.getElementById("fire").addEventListener("mouseout", mouseOut);
// styles for when mouse is over the div 
function mouseOver() {
    document.getElementById("fire").style.height = "100px";
  document.getElementById("fire").style.width = "100px";
  document.getElementById("fire").style.backgroundColor = "black";

}
// styles for when mouse is not over the div
function mouseOut() {
    document.getElementById("fire").style.height = "100px";
  document.getElementById("fire").style.width = "100px";
  document.getElementById("fire").style.backgroundColor = "blue";
  
}

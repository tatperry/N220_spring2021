var txtName = document.getElementById("txtName");
var dvOutput = document.getElementById("dvOutput");

function gatherName() {
  dvOutput.innerHTML = "Hello " + txtName.value;

  txtName.value = "";
}
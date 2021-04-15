
var txtHop = document.getElementById("txtHop");
// if USER inputs a string. don't continue

var dvResponse = document.getElementById("dvResponse");

function checkHops() {
  var bunnyJumps = txtHop.value;

  //   If the user does not input a number
  if (isNaN(bunnyJumps)) {
    dvResponse.innerHTML = "Please input a Number";
    dvResponse.style.color = "#24d1d4";
    dvResponse.style.fontSize = "30px";
    //   stop the funtion
    return;
  }
  //   IF IT IS BELLOW 100, IT TOO LOW
  if (bunnyJumps < 100) {
    // too cold
    // provide feedback its too low
    dvResponse.innerHTML = "The bunny is not making enough hops";
    dvResponse.style.color = "#ed541c";
    dvResponse.style.fontSize = "20px";
  } else if (bunnyJumps > 300) {
    dvResponse.innerHTML = "The bunny is making to many hops";
    dvResponse.style.color = "#c7141d";
    dvResponse.style.fontSize = "50px";
  } else {
    dvResponse.innerHTML = "The bunny is hopping perfectly";
    dvResponse.style.color = "#270391";
    dvResponse.style.fontSize = "80px";
  }

  //   RESET HOPS INPUT
  txtHop.value = "";
}

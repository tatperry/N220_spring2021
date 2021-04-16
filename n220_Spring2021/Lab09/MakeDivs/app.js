
let txtExample = document.getElementById("txtExample");
let find = document.getElementById("find");

let tempSpecial = [
    {name: "Susan", update: "Today is way to cold"},
    {name: "Tyler", update: "Today is getting a little warmer"},
    {name: "Adam", update: "Today is perfect"},
    {name: "Samantha", update: "Today is a blazing hot"},
];

function findBestWeather(){
    var element = atmosphereTemp.find(function(item){
        return item =="atmosphere";
    });
    console.log(tempSpecial[2]);

 for(var i=0; i<tempSpecial.length; i++){
     let newTemp = document.createElement("div");
     newTemp.innerHTML = tempSpecial[i].name + ":" + fakeSocial[i].update;
     found.appendChild(newTemp);
 }   
}
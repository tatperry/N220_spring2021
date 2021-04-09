// using a for loop to increase the size of the div

var i = 0;
// function for the box (button)
        function buttonClick() {
            i++;
            // increasing the size by 10%
            document.getElementById('inc').value = i + ".10";
            document.getElementById('inc').style.backgroundColor = "green";

        }
function convertValues(event){
    event.preventDefault();
// Get the vale of Marla input
var marla =parseFloat(document.getElementById("marla").value)
// conversion factor:1 marla is equal to 272.251 square feet
var squareFeet = marla * 272.251;
// Display the result on screen
document.getElementById("result").innerHTML = marla + "Marla =" + squareFeet + "SquareFeet.";



}
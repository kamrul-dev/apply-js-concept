
function inchToFeet(inches){

    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var feet = inchToFeet(myInches)
console.log('myInches to feet',feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches)
console.log('dadi inches to feet',feet)

var naniInches = 156;
var feet = inchToFeet(naniInches)
console.log('naniInches to Feet',feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('nanaInches to Feet',feet);


// miles to kelometer

function milesToKelometes(miles){
    var km = miles * 1.60934;
    return miles;
}
var marathon = milesToKelometes(26.2);
console.log('Marathon miles in Kilometer',marathon);
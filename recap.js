// variable
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array
var partner = ['fahim', 'arafat', 'kamrul', 'hasan'];
var elementCount = partners.length;
var finIndex = partner.indexOf('kamrul');
partner.push('ryhan');
partner.pop();

// conditional

if(bookPrice < 120){
    console.log('I will buy this book');

}
else{
    console.log('I will not buy this book');
}



//loop
var i = 0;
while(i <= 17){
    // do some work
    i++;
}

for(var i = 0; i<=15; i++){
    // write code 
}

//function 
function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return false;
}

var mooStatud = isMoonUp(21);

// let const

// value of variable could change
let price = 34;
price = 23;
price = 19;

// value of the variable will not change
const myName = 'Bangladesh';
console.log(myName);
myName = 'hiji biji';

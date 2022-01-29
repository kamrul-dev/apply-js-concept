
// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);


function isEven(number){
    if(number%2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMynumberEven = isEven(myNumber);
console.log('Is my number even:', isMynumberEven);


const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('Is her number even:', isHerNumberEven);


// is odd function

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const isMyNumberOdd = isOdd(myNumber);
console.log('Is my number odd:', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('Is her number odd:', isHerNumberOdd);
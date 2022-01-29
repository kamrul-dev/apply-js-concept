
function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){     
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leep year:', isMyYearLeapYear);


const yourYearLeapYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYearLeapYear);
console.log('is your year leap year: ', isYourYearLeapYear);
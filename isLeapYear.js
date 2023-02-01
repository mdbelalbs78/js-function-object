function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    } 
    return false;
}

const isMyYear = isLeapYear(1952);
console.log('my year', isMyYear)
const yourYear =  isLeapYear(1950);
console.log('Your Year', yourYear);
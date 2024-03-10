// https://oj.masaischool.com/contest/10637/problem/01

// LOGIC: Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years, if they are exactly divisible by 400.


let year1 = 900;
let isLeapYear = 'Not a Leap Year';

if ((year1 % 100 !== 0 && year1 % 4 === 0) || (year1 % 100 === 0 && year1 % 400 === 0)) {
    isLeapYear = 'Leap Year'
}
console.log(isLeapYear);



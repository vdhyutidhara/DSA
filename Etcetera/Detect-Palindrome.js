function isPalindrome(num) {
    var str = num.toString();
    var rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

var num1 = 1234321;
var num2 = 112211;
var num3 = 12345;

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));

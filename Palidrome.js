// Given an integer x, return true if x is a palindrome, and false otherwise.
const Palidrome = function(s){
    if(s < 0){
        return false;
    }else{
        var number = s;
        var reverse = 0;

        while(number > 0){
            reverse = reverse * 10 +number % 10;
            number = parseInt(number / 10) 
        }
    }return s === reverse
}

console.log(Palidrome(121))
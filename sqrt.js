// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
const sqrt = function(s){
    var ans = 0
    if(s === 0){
        ans = 0
    }else{
        for(let i = 0; i <= s; i++){
            if(i*i === s){
                ans = i
                break
            }
            if(i * i > s){
                ans = i -1
                break
            }
        }
    }
    return ans
}
console.log(sqrt(0))
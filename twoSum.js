// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = function (target, nums){
    for(let i = 0; i<nums.length; i++){
        const diff = target - nums[i];
        const indexDiff = nums.indexOf(diff);

        if(indexDiff !== -1 && indexDiff !== i){
            return[i, indexDiff]
        }
    }
}

console.log(twoSum(9, [2,7,8]))
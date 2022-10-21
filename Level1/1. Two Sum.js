// 1. Two Sum
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


var twoSum = function(nums, target) {
    const dict = new Map()
    
    for(let i=0;i<nums.length;i++){
        let remainder = target-nums[i]
        if(dict.has(remainder)){
            return [dict.get(remainder), i]
        }
        dict.set(nums[i],i)
      }  
};


var twoSum = function(nums, target) {
    let hashMap = {}
    
    for(let i=0; i < nums.length; i++){
        let number = nums[i]
        let diff = target - number
        
        if(diff in hashMap){
            return [ hashMap[diff], i]
        }else{
            hashMap[number] = i
        }
    }
};
// 70. Climbing Stairs
// Easy

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


var climbStairs = function(n) {
    return helper(n, {})

};

function helper(n, hashMap){
    //The max number of steps, base case
    if(n <= 2){
        return n
    }
    
    //if not in the hashMap, set it
    if(!hashMap[n]){
        hashMap[n] = helper(n-1, hashMap) + helper(n-2, hashMap)
    }
    
    //return the n in the hashMap after the mapping down from n to the base case
    return hashMap[n]
}
 

////////////////////////////////////////////////////////////////

var climbStairs = function(n) {
    let dict = {1:1, 2:2}
    
    for(let i=3; i<=n; i++){
        dict[i] = dict[i-1] + dict[i-2]
    }
    
    return dict[n]
};
// 392. Is Subsequence
// Easy

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


var isSubsequence = function(s, t) {
    if(s.length > t.length) return false
    if(s.length === 0) return true
    
    let count = 0
    
    for(let i=0; i<t.length; i++){
        if(s[count] === t[i]){
            count++
        }
        
        if(count === s.length) return true
    }
    
    return false
};




var isSubsequence = function(s, t) {
    let left = 0
    let right = 0
    
    while(right < t.length){
        if(left < s.length && s[left] === t[right]){
            left++
        }
        right++
    }

    return left === s.length
};
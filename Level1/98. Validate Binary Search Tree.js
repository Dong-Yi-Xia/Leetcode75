// 98. Validate Binary Search Tree
// Medium

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

//     The left subtree of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

 

// Example 1:

// Input: root = [2,1,3]
// Output: true

// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function(root) {
    let max = Infinity
    let min = -Infinity
 
    function isValid(root, min, max){
        if(root == null) return true
        if(root.val >= max || root.val <= min) return false
        return isValid(root.left, min , root.val) && isValid(root.right, root.val , max)
    }
 
    return isValid(root, min,max)
 };

 

var isValidBST = function(root) {
    if (!root) return true;
    if (!isValidBST(root.left)) return false;
    if (!isValidBST(root.right)) return false;
    

    let left_queue = [];
    let right_queue = [];
    if(root.left){
        left_queue.push(root.left);
    }
    if(root.right){
        right_queue.push(root.right);
    }
    
    while(left_queue.length){
        let current = left_queue.shift();
        if (current.val >= root.val){
            return false;
        }
        if (current.left){
            left_queue.push(current.left);
        }
        if (current.right){
            left_queue.push(current.right);
        }  
    }
    
    while(right_queue.length){
        let current = right_queue.shift();
        if (current.val <= root.val){
            return false;
        }
        if (current.left){
            right_queue.push(current.left);
        }
        if (current.right){
            right_queue.push(current.right);
        }  
    }
    
    return true;
};
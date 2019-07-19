// Given the root of a binary tree, each node has a value from 0 to 25 representing the letters 'a' to 'z': a value of 0 represents 'a', a value of 1 represents 'b', and so on.

// Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

// (As a reminder, any shorter prefix of a string is lexicographically smaller: for example, "ab" is lexicographically smaller than "aba".  A leaf of a node is a node that has no children.)

//mapping the integer to correct string
class BinarySearchTree{
  constructor(){
  this.root = null;
  }

  insert(value){
      let newNode = new Node(value);
      if (this.root === null){
          this.root = newNode;
          return
      }
      // check left of the root. 
  
      let current = this.root;
      while(true){
          if (value<current.value){
              if (current.left === null){ // if left node is null, set it to equal new node. 
                  current.left = newNode  
                  return this
              }  
              
              
              current = current.left // if there is a value in the left node, check left node.. set current equal to the new node. 
          }

          if (value > current.value){
              if (current.right === null){
                  current.right = newNode;
                  return this
              }
              current = current.right
          }
          
      }
     
  }
}

class Node{
  constructor(value){
      this.value = value;
      this.left = this.right = null;
  }
 
}


let tree = new BinarySearchTree
tree.insert(2);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(1);
tree.insert(3);






// console.log(tree)

//console.log(String.fromCharCode(int + 97))
function convertToString(number) {
    return String.fromCharCode(number + 97 );
}
var smallestFromLeaf = function(root,pathString) {
    //path array
    var paths = [];
    //loop over binary tree
    let oldPathString;
    var stack = [root];
    while(stack.length) {
      let current = stack.pop();
      console.log(current.value)
      oldpathString = pathString;
      pathString = pathString ? pathString+ convertToString(current.value): convertToString(current.value);
      if (current.right){
        stack.push(current.right);
      } 
      if (current.left){
        stack.push(current.left);
      } else if (current.right === null && current.left === null) {
        paths.push(pathString);
        pathString = oldpathString;
        //then push it:
        //remove current.value.toString() from pathString
      }
    }
    return paths.sort()[0];
};
//weird solution above

// console.log(tree.root)

(smallestFromLeaf(tree.root))
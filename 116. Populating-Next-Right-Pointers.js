




function Node(val,left,right,next) {
this.val = val;
this.left = left;
this.right = right;
this.next = next;
}
//   let node4 = new Node(4,null,null,null)
//   let node5 = new Node(5,null,null,null)
//   let node6 = new Node(6,null,null,null)
//   let node7 = new Node(7,null,null,null)
// let node2 = new Node(2,node4,node5,null)
// let node3 = new Node(3,node6,node7,null)
let node1 = new Node(0,null,null,null);





  

function isNull(){
  let n = 1;
  function inner(num){ 
    if (num === Math.pow(2,n) - 1){
    n++
    return true
    } else {
    return false
    }
    }
    return inner
  // 2^n + 1
}


// 1, 3, 7, 15, 31, 63

var connect = function(root) {
  let saved = isNull()
  if (root === null){
    return root
  }
  let stack = [root]; 
  let counter = 0;
  
  while(stack.length){
    let popped = stack.shift()
    counter++
    if (saved(counter)){
      popped.next = null;
    } else {
      popped.next = stack[0]
    }

    if (popped.left !== null){
      stack.push(popped.left)
    }
    if (popped.right !== null){
      stack.push(popped.right)
    }
  }

  return root

}


console.log(connect(node1))

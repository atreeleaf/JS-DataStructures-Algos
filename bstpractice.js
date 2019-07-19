class BST{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    let newNode = new BST(value)
    if (this.value === null){
      this.value = value
      return
    }
    let current = this
    while(current){
      if (value<current.value){
        if (current.left === null){
          current.left = newNode
          return
        } else if (current.left){
          current = current.left
        }
      }
      if (value>current.value){
        if (current.right === null){
          current.right = newNode
          return
        } else if (current.right){
          current = current.right
        }
      }
    }

  }

  depthFirstSearch(node,branch = ''){
    // check current node
    console.log(node.value);
    

    if (node.left === null && node.right === null){
       branch += node.value
        console.log(branch.split('--'))
        console.log('we\'ve reached a leaf!' + ' ' + branch)
        return
      }

      branch += node.value + '--'

    if (node.left !== null){
      
      this.depthFirstSearch(node.left,branch)
    }

    if (node.right !== null){
      this.depthFirstSearch(node.right,branch)
    }


  }
}


let mybst = new BST(3);
mybst.insert(4)
mybst.insert(2)
mybst.insert(3.5)

mybst.depthFirstSearch(mybst)



console.log(mybst);


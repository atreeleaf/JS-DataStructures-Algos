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






console.log(tree)


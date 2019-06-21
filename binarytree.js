class BinaryTree {
    constructor(root){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value); // creates instance of new node object - 
        if (this.root === null){
            this.root = newNode; // checks to see if root is null
            return this;
        } 
        let current = this.root;
        while (true){
            if (value < current.val){ // compares value 
                if (current.left === null){
                    current.left = newNode;
                    return this
                } else {
                    current = current.left;
                }
            } else if (value > current.val){
                if (current.right === null){
                    current.right = newNode;
                    return this
                } else {
                    current = current.right;
                }
            }
        }
        
        
    }
};


class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
    
}




let myTree = new BinaryTree();






console.log(myTree)


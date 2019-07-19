class binarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        if (this.root === null){
            this.root = new Node(val)
            return this
        }
        let newNode = new Node(val)
        let current = this.root
        while(true){

            if (val === current.val){
                console.log('duplicate found')
                return 'no duplicates allowed'
            }
            if (val <current.val){
                if (current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left;
                
            }

            if (val > current.val){
                if (current.right === null){
                    current.right = newNode
                    return this
                }
                current = current.right
            }
            
           
        }
    }

    inOrder(){
        // print all values of the tree.

        let stack = [];
        let current = this.root;

        while (true){

                if (current !== null){
                    stack.push(current)
                    current = current.left
                } else if (current === null && stack.length >0){

                let poppedNode = stack.pop()
                console.log(poppedNode.val)
                current = poppedNode.right
    
        
               
            }
            
        }
    }
}


class Node{
    constructor(val){
        this.left = this.right = null;
        this.val = val;
    }
}

let myGreenTree = new binarySearchTree

myGreenTree.insert(5);
myGreenTree.insert(8);
myGreenTree.insert(4);
myGreenTree.insert(1);
myGreenTree.insert(3);



console.log(myGreenTree.inOrder());




// console.log(myGreenTree.root)

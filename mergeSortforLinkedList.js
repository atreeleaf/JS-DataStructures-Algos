// Sort a linked list in O(n log n) time using constant space complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 */

var sortList = function(head) {
    if(head === null) {
        return null;
    }

    var len = 0;
    var p = head;
    while(p) {
        len++;
        p = p.next;
    }
    var newHead = sort(len);
    return newHead;


    function sort(len) {
        // there will be no case of len = 0 which is caused by 1/2
        if(len === 1) {
            var temp = head; // memory location of node 1
            // !!! important: moving pointer to the next
            // e.g. 1->2->3->4->
            // 5->6->7->8->9->10
            // head-> 1

            // sort (2)===> left head (1, 2), right head (3,4)
            // sort (5) ==> left head (1,2,3,4) , right head -->>>
            // callstack 
            // now head will be point to 2
            head = head.next;  // head ---> memory location of node2
            temp.next = null; // node2 ----> null
            return temp; //---> returns node1.
          }
            // there will be no case of len = 0 which is caused by 1/2
        var leftHead = sort(parseInt(len/2)); // node 1
        var rightHead = sort(len - parseInt(len/2)); // node 2
        var newHead = merge(leftHead, rightHead); // 
        
        return newHead;
    }
    function merge(first, second) { // first = node 1, second = node 2
        var h = new ListNode(-1);
        var cur = h; // cur points to the memory location of our listNode (-1)
  
        while(first && second) { // 78 // 
           //looks like this so far: -1 -> 1 -> 2 -> 3 ->4 -> 5 -> 6 -> 7-> 8
           // first = node 2 , cur = node (1)
           // first = node 7, cur = node 2,
           // 
           
            if(first.val <= second.val) {
                cur.next = first; // cur.next points to Node 1
                first = first.next; // first = null;
            } else {
                cur.next = second;
                second = second.next;
            }
            
            cur = cur.next; // cur  = node 1
        }
        
        if(first) {
            cur.next = first;
        }
        
        if(second) {
            cur.next = second;
        } // cur.next points to the second node. 
        
        cur = h.next; // points cur to head 
        h.next = null; // clears memory of h.next
        return cur; // returns head of sorted linked list. 
    }
};
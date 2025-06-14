/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// I've done it in the past, so no big deal, pretty easy
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let current = null;

    let sum = 0;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0) {
        
        sum = carry;

        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);

        if(head == null) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = current.next;
        }
    }

    return head;
};
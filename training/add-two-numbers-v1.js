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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// l1: 9 → 9 → 9 → 9 → 9 → 9 → 9
const l1 = new ListNode(9,
    new ListNode(9,
    new ListNode(9,
    new ListNode(9,
    new ListNode(9,
    new ListNode(9,
    new ListNode(9)))))));

// l2: 9 → 9 → 9 → 9
const l2 = new ListNode(9,
    new ListNode(9,
    new ListNode(9,
    new ListNode(9))));

function printList(head) {
    let current = head;
    while(current != null) {
        console.log(current.val);
        current = current.next;
    }
}


// this one should be pretty easy
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


console.log("First list:");
printList(l1);
console.log("Second list:");
printList(l2);
console.log("Output list:");
printList(addTwoNumbers(l1, l2));




/*
// let's play around with linked lists
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const n1 = new ListNode(3);
const n2 = new ListNode(5);
const n3 = new ListNode(7);
n1.next = n2;
n2.next = n3;


function printList(head) {
    let current = head;
    while(current != null) {
        console.log(current.val);
        current = current.next;
    }
}



// l1: 2 → 4 → 3
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

// l2: 5 → 6 → 4
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log("First list:");
printList(l1);
console.log("Second list:");
printList(l2);
*/
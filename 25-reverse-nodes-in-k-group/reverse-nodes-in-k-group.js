/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Base case: if the list is empty or k is 1, no need to reverse
    if (!head || k === 1) {
        return head;
    }

    // Check if there are at least k nodes remaining
    let current = head;
    for (let i = 0; i < k; i++) {
        if (!current) {
            return head; // Not enough nodes, return as is
        }
        current = current.next;
    }

    // Reverse the first k nodes
    let prev = null;
    let curr = head;
    for (let i = 0; i < k; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Recursively reverse the rest of the list
    head.next = reverseKGroup(curr, k);

    // Return the new head of the reversed group
    return prev;
};
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const mergeTwoLists = (list1, list2) => {
    let result = new ListNode()
    const head = result

    while (list1.next && list2.next) {
        if (list1.val <= list2.val) {
            result.next = list1
            list1 = list1.next
        } else {
            result.next = list2
            list2 = list2.next
        }
        result = result.next
    }

    if (list1) {
        result.next = list1
    }
    if (list2){
        result.next = list2
    }
    return head.next
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
console.log(mergeTwoLists(list1, list2));

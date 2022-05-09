class ListNode {
    constructor(n, prev = null, next = null) {
        this.n = n;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(val) {
        if(!this.head) {
            this.head = new ListNode(val);
            this.tail = this.head;
            return;
        }
        this.tail.next = new ListNode(val, this.tail);
        this.tail = this.tail.next;
    }
    unshift(node) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    shift() {
        const ret = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        ret.next = null;
        ret.prev = null;
        return ret;
    }
    pop() {
        const ret = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        ret.prev = null;
        return ret;
    }
}

function solution(rc, operations) {
    let rcl = new LinkedList();
    rc.forEach(row => {
        const list = new LinkedList();
        row.forEach(item => list.append(item));
        rcl.append(list);
    });

    operations.forEach(operation => {
        if(operation === "Rotate") {
            let rightPopped = rcl.head.n.pop(), leftPopped = rcl.tail.n.shift();
            rcl.head.n.unshift(new ListNode(rcl.head.next.n.head.n));
            rcl.tail.n.append(rcl.tail.prev.n.head.n);
            let cur = rcl.head.next;
            while(cur) {
                [rightPopped.n, cur.n.tail.n] = [cur.n.tail.n, rightPopped.n];
                cur = cur.next;
            }
            cur = rcl.tail.prev;
            while(cur) {
                [leftPopped.n, cur.n.head.n] = [cur.n.head.n, leftPopped.n];
                cur = cur.prev;
            }
        }
        else rcl.unshift(rcl.pop());
    });

    let answer = [];
    let cur = rcl.head;
    while(cur) {
        let row = [], rowCur = cur.n.head;
        while(rowCur) {
            row.push(rowCur.n);
            rowCur = rowCur.next;
        }
        answer.push(row);
        cur = cur.next;
    }

    return answer;
}
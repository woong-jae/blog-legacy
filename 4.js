class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(elem) {
        const heap = this.heap;
        heap.push(elem);
        let cur = heap.length - 1, parent = Math.floor((cur - 1) / 2);
        while(cur > 0 && heap[parent][1] > heap[cur][1]) {
            [heap[parent], heap[cur]] = [heap[cur], heap[parent]];
            cur = parent;
            parent = Math.floor((cur - 1) / 2);
        }
    }
    pop() {
        const heap = this.heap;
        if(heap.length <= 1) return heap.pop();
        const ret = heap[0];
        heap[0] = heap.pop();
        let here = 0;
        while(1) {
            let left = here * 2 + 1, right = here * 2 + 2;
            if(left >= heap.length) break;
            let next = here;
            if(heap[next][1] > heap[left][1]) next = left;
            if(right < heap.length && heap[next][1] > heap[right][1]) next = right;
            if(next === here) break;
            [heap[next], heap[here]] = [heap[here], heap[next]];
            here = next;
        }
        return ret;
    }
}

function solution(n, paths, gates, summits) {
    let answer = [Infinity, Infinity];
    const isSummit = new Set(summits);
    const adjList = Array.from(Array(n + 1), () => []);
    paths.forEach(([a, b, w]) => {
        adjList[a].push([b, w]);
        adjList[b].push([a, w]);
    });

    const intensity = Array(n + 1).fill(Infinity);
    const pq = new MinHeap();
    gates.forEach(gate => {
        pq.push([gate, 0]);
        intensity[gate] = 0;
    });
    while(pq.heap.length) {
        const [node, nodeWeight] = pq.pop();
        if(nodeWeight > intensity[node]) continue;
        adjList[node].forEach(([next, weight]) => {
            const cand = Math.max(weight, nodeWeight);
            if(intensity[next] > cand) {
                intensity[next] = cand;
                if(isSummit.has(next)) {
                    if(
                        intensity[next] < answer[1] || 
                        (intensity[next] === answer[1] && next < answer[0])
                    ) answer = [next, intensity[next]];
                }
                else pq.push([next, intensity[next]]);
            }
        });
    }

    return answer;
}
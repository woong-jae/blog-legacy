function solution(queue1, queue2) {
    let diff = 0;
    for(let i = 0; i < queue1.length; i++) {
        diff += queue1[i] - queue2[i];
    }

    let left = 0, right = queue1.length;
    let arr = queue1.concat(queue2), tried = 0;
    while(left < right) {
        if(diff === 0) return tried;
        if(diff > 0) {
            diff -= arr[left] * 2;
            left = (left + 1) % arr.length;
        }
        else {
            diff += arr[right] * 2;
            right = (right + 1) % arr.length;
        }
        tried++;
    }

    return -1;
}

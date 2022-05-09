function solution(survey, choices) {
    const types = new Map([["RT", 0], ["CF", 0], ["JM", 0], ["AN", 0]]);

    survey.forEach((type, idx) => {
        let choice = choices[idx] - 4;
        if(type[0] > type[1]) choice *= -1;
        type = Array.from(type).sort().join("");
        types.set(type, types.get(type) + choice);
    });

    return Array.from(types).map(([type, count]) => {
        let [left, right] = type.split("");
        if(count === 0) return left;
        if(count > 0) return right;
        return left
    }).join("");
}
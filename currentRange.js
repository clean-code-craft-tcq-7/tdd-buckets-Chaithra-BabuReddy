export function getRangeOfCurrents(nums) {
    let sortedNums = nums.sort((a, b) => { return a - b });
    let cnt = 1;
    let range = [];
    let first = sortedNums[0];
    let next = sortedNums[1]
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i + 1] || (sortedNums[i + 1] - sortedNums[i]) === 1) {
            next = sortedNums[i + 1]
            cnt++
        } else {
            let x = `${first}-${next}:${cnt}`
            range.push(x);
            first = sortedNums[i + 1];
            next = sortedNums[i + 1]
            cnt = 1;
        }
    }
    return range;

}

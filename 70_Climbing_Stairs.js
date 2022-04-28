const n = 5

const climbStairs = n => {
    let countDpArr = new Array(n)
    countDpArr[0] = 1
    countDpArr[1] = 2

    for (let i = 2; i < countDpArr.length; i++) {
        countDpArr[i] = countDpArr[i - 1] + countDpArr[i - 2]
    }
    return countDpArr[n-1]
}

console.log(climbStairs(n));
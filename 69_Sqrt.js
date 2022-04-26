const x = 0

const mySqrt = x => {
    let min = 0
    let max = Math.floor(x / 2 + 1)
    let mid

    while (min <= max) {
        mid = Math.floor((min + max) / 2)
        if (mid * mid < x) {
            min = mid + 1
        } else if (mid * mid > x) {
            max = mid - 1
        } else {
            return mid
        }
    }

    return max
}

console.log(mySqrt(x));
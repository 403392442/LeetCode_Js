const nums = [-2]

const maxSubArray = nums => {
    let max = -Infinity
    let tempSum = 0

    for (let i = 0; i < nums.length; i++) {
        tempSum = Math.max(nums[i], tempSum + nums[i])
        max = Math.max(tempSum, max)
    }
    return max
}

console.log(maxSubArray(nums))
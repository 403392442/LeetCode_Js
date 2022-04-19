const nums = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = nums => {
    let pointer = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[pointer]) {
            nums[++pointer] = nums[i]
        }
    }
    return ++pointer
}

console.log(removeDuplicates(nums));
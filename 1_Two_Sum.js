const nums = [3, 3]
const target = 6;

const twoSum = (nums, target) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const arrayNum = nums[i]
        const numInMap = map.get(arrayNum)
        const diff = target - arrayNum
        const diffInMap = map.get(diff)

        if (diffInMap !== undefined) {
            return [i, diffInMap]
        }

        if (numInMap === undefined) {
            map.set(arrayNum, i)
        }
    }

    return []
}

const result = twoSum(nums, target);
console.log(result);

const twoSum_2 = (nums, target) => {
    let diff = 0;
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (nums.includes(diff) && (i !== nums.indexOf(diff))){
            return [i, nums.indexOf(diff)]
        }
    }
}

console.log(twoSum_2(nums, target));

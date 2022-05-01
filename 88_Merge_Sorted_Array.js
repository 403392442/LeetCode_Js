let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]
let m = 3
let n = 3

const merge = (nums1, m, nums2, n) => {
    let insertPosition = m + n - 1
    m--
    n--

    while (n >= 0) {
        nums1[insertPosition--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
}

merge(nums1, m, nums2, n)
console.log(Infinity);

const isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/, '')
    console.log(s)
    for(let i = 0, j = s.length-1; i < s.length; i++, j--){
        if(s.charAt(i) !== s.charAt(j)) return false
    }
    return true
};

let s = "A man, a plan, a canal: Panama"
isPalindrome(s)

let nums = [4,1,2,1,2]
nums = nums.slice(0)
console.log(Number.MAX_SAFE_INTEGER);
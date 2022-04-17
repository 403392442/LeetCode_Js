const strs = ["", ""]

const longestCommonPrefix = strs => {
    if (strs.length === 1)
        return strs[0]

    let result = ''

    for (let i = 0; i < strs[0].length; i++) {
        let filterArr = strs.filter(str => {
            return str[i] === strs[0][i]
        })
        if (filterArr.length === strs.length) {
            result += strs[0][i]
        } else {
            return result
        }
    }

    return result
}

console.log(longestCommonPrefix(strs));
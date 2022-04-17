const s = "(("

const isValid = s => {
    let arr = []
    let pointer = -1
    let foundParentheses = ''
    let arrData = ''

    for (let i = 0; i < s.length; i++) {
        foundParentheses = s[i]

        switch (foundParentheses) {
            case '(':
                pointer++
                arr[pointer] = foundParentheses
                break
            case '[':
                pointer++
                arr[pointer] = foundParentheses
                break
            case '{':
                pointer++
                arr[pointer] = foundParentheses
                break
            case ')':
                arrData = arr[pointer]
                if (arrData !== '(') {
                    return false
                } else {
                    pointer--
                }
                break
            case ']':
                arrData = arr[pointer]
                if (arrData !== '[') {
                    return false
                } else {
                    pointer--
                }
                break
            case '}':
                arrData = arr[pointer]
                if (arrData !== '{') {
                    return false
                } else {
                    pointer--
                }
                break
            default: return false
        }
    }
    return pointer === -1;
}
console.log(isValid(s))
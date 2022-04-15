const s = 'III'

const romanToInt = s => {
    const map = new Map()
    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)

    let curValue = 0
    let nextValue = 0
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        curValue = map.get(s.charAt(i))
        nextValue = map.get(s.charAt(i+1))
        if (curValue < nextValue){
            sum += nextValue - curValue
            i++
        } else {
            sum += curValue
        }
    }

    return sum
}

console.log(romanToInt(s));
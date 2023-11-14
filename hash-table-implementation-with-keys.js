
// [2, 5, 1, 2, 3, 5, 1, 2, 4]
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined;
}

// Using Hash Table: Time- O(n) & Space complexity- S(n)
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i] !== undefined]) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined;
}
firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])
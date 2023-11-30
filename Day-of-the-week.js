const input = '1';
let ans = ''
switch (Number(input)) {
    case 0: ans = 'Sunday'
        break;
    case 1: ans = 'Monday'
        break;
    case 2: ans = 'Tuesday'
        break;
    case 3: ans = 'Wednesday'
        break;
    case 4: ans = 'Thursday'
        break;
    case 5: ans = 'Friday'
        break;
    case 6: ans = 'Saturday'
        break
    default:
        ans = 'Invalid Day'
        break;
}
console.log(ans)
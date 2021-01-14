//Maximum of Sub Array
function subArray(arr) {
    let a1 = 0;
    let a2 = arr[0];
    arr.forEach((i, a) => {
        a1 = Math.max(i, a1 + i);
        a2 = Math.max(a2, a1);
    })
    return a2;
}

console.log(subArray([-2,1,-3,4,-1,2,1,-5,4]));

//Plus One

function plusOne(digits) {
    let i = digits.length -1;
    let val = 0;
    let carry = 1;
    while(i >= 0 && carry) {
        val = digits[i] + carry;
        carry = Math.floor(val / 10);
        digits[i] = val % 10;
        i--;
    }
    if(carry) digits.unshift(carry);
    return digits;
}



//Sqrt
function mySqrt(x) {
    return Math.floor(x ** 0.5);
}

console.log(mySqrt(25));
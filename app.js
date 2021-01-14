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

//Plus One



//Sqrt
function mySqrt(x) {
    return Math.floor(x ** 0.5);
}

console.log(mySqrt(25));
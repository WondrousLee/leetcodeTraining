let nums = [1,-2147483648,-2147483648,2]; 
//No float support in this code, need to throw out all...
//... math.max and math.min functions and change it to...
//... custom functions with for loops 'n stuff.
///////


let maxNums = []

for (let i = 0; i < nums.length; i++) {
    let min = Math.max(...nums)
    maxNums.push(min);
    var j = 0;
    while (j < nums.length) {
        if (nums[j] === min) {
            nums.splice(j, 1);
        } else {
            ++j;
        }
    }
    if (nums.length == 1){
        maxNums.push(nums[0]);
    }
}

while (maxNums.length > 3) {
    min = Math.min(...maxNums)
    var i = 0;
    while (i < maxNums.length) {
        if (maxNums[i] === min) {
            maxNums.splice(i, 1);
        } else {
            ++i;
        }
    }
}

let returnNeeded
if (maxNums.length >= 3){
    returnNeeded = maxNums[2];
}
else {
    returnNeeded = Math.max(...maxNums)
}


////////
console.log(returnNeeded);
console.log(maxNums)
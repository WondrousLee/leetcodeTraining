let nums = [3,2,1];
let maxNumber = 0;

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
}

while (nums.length > 3) {
        min = Math.min(...nums)
        removeItemAll(nums, min);
}

for (let i = 0; i < nums.length; i++){
    if (nums[i] == nums[i+1]){
          nums.splice(i, 1);
          i--;
    }
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxNumber]) {
        maxNumber = i;
    }
}

let result = maxNumber+1;

console.log(result);
console.log(nums);

// to be honest, i don't have mental capacity to finish it today.
// WIP
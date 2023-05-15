//Values given by Leet
let nums = [3,21,1,10,2,2] //nums array
let val = 1; //Value to remove

for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == val){
    nums.splice(i, 1);
    i--;
    }
}
console.log(nums.length); //Change to return when pasting into leetcode.
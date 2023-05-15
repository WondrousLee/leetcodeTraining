let nums = [1, 3, 5, 6];
let target = 10;

let i;
for (i = 0; i <= nums.length; i++) {
    if (nums[i] == target) {
        break;
    }
    else if (target < nums[i]) {
        nums.splice(i, i-1, target);
        break;
    }
    else if (i == nums.length) {
        nums.push(target)
        break;
    }
}
console.log(i)
console.log(nums)
//it's better... it's getting there... but i don't have ideas for now.
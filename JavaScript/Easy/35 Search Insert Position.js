let nums = [1, 3, 5, 6];
let target = 2;


for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == target) {
        return(i);
        break;
    }
    if (target < nums[i]) {
        let previousindex = i - 1
        nums.splice(i, previousindex, target);
        return(i)
        break;
    }
    else if (i == nums.length - 1) {
        nums.push(target)
        return(nums.length - 1)
        break;
    }
}
//it's better... it's getting there... Beats 37%
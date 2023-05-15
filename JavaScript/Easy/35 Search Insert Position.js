let nums = [1,3,5,6];
let target = 10;


let firstAttemptFound;
let secondAttemptFound;
for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == target){
        console.log(i);
        break;
    }
    else {
        found = false;
    }
}

if (found == false){
    for (let j = 0; j <= nums.length; j++) {
        if (target < nums[j]){
            let previousindex = j - 1
            nums.splice(j, previousindex , target);
            console.log(j)
            secondAttemptFound = true;
            break;
        }
        else {
            secondAttemptFound = false;
        }
    }
    if (secondAttemptFound == false){
    nums.push(target)
    console.log(nums.length-1)
    }
}
//one of the worst implementation by LeetCode so i'll need to rework it asap ;P
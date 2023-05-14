
let nums = [1, 1, 2, 3, 3, 3]

let status = 0;
for (let i = 0; i < nums.length; i++){

      if (nums[i] == nums[i+1]){
        let status = 1;
        nums.splice(i, 1);
        if (status == 1){
          if (nums[i] == nums[i+1]){
            nums.splice(i, 1);
          }
        }
      }
}
console.log(nums)
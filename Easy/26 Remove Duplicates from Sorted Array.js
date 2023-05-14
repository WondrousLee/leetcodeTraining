let nums = [1, 1, 2, 3, 3, 3]
let status = 0;
for (let i = 0; i < nums.length; i++){

      if (nums[i] == nums[i+1]){
            nums.splice(i, 1);
            i-- //oh my gawd, it was THAT easy...
      }
}
console.log(nums)
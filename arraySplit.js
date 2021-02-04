let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let part = nums.slice(2, 5);
let remove = nums.splice(5, 2, 45, 65);
//console.log(nums);
// console.log(remove);
let together = nums.join(" > ");
console.log(together);



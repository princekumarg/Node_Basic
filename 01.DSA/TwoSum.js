/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [0, 1];
};
var twoSum2 = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const sum = target - nums[i];
        if (map.has(sum)) {
            return [map.get(sum), i]
        }
        map.set(nums[i], i);
    }
    return [];
};

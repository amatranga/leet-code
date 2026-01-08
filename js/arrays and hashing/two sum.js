class Solution {
  /**
   * @param { number[] } nums
   * @param { number } target
   * @return { number[] }
   */
  twoSum_bruteForce(nums, target) {
    // for each item in nums, check if there are any other items in nums that add up to target
    // time cocmplexity -- O(n^2)
    // space complexity -- O(1)
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
    return [];
  }

  twoSum_Map(nums, target) {
    // for each item in nums, check if complement to reach target is already in a hashMap. If so, return [complement, currentItem]
    // if complement does not exist, add current item
    // time complexity -- O(n)
    // space complexity -- O(n)
    const complements = new Map();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (complements.has(diff)) {
        return [complements.get(diff), i];
      }
      complements.set(nums[i], i);
    }
    return [];
  }
}
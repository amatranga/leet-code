/**
 * Given an array of integers, returns true if any value appears at least twice in the array,
 * and false if every element is distinct.
*/

class Solution {
  /**
   * @param { number[] } nums
   * @return { boolean }
   */

  hasDuplicate_bruteForce(nums) {
    // naieve -- for each element in the array, check if there is another copy of it in the array
    // time complexity -- O(n^2)
    // space complexity -- O(1)
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }

  hasDuplicate_sortFirst(nums) {
    // sort the array descending. Iterate through; if any number is equal to the next number, return true.
    // time complexity -- O(n log n)
    // space complexity -- O(n) or O(1) (depends on sorting algorithm)
    const sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        return true;
      }
    }
    return false;
  }

  hasDuplicate_hashSet(nums) {
    // Create a hash set from nums. If we ever see an entry in the hash set, return true.
    // time complexity -- O(n)
    // space complexity -- O(n)
    const seen = new Set();
    nums.forEach(num => {
      if (num in seen) {
        return true;
      }
      seen.add(num);
    });
    return false;
  }

  hasDuplicate_setLen(nums) {
    // Better solution -- compare size of set(nums) to size of nums. If less than, there are dupes.
    // time complexity -- O(n)
    // space complexity -- O(n)
    return new Set(nums).size < nums.length
  }
}
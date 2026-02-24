class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive_brute(nums) {
      // Create set of all numbers in nums
      // For all numbers in nums
      // 1. Check if num - 1 exists in set
      //    a. if so, continue
      //    b. if not, start building the sequence counter
      //      i. sequence counter increments if num + 1 is in set
      
      const numSet = new Set(nums);
      let longestSequence = 0;
      
      for (let num of numSet) {
        let curSequence = 0;
        let curVal = num;
        while (numSet.has(curVal)) {
          curSequence++;
          curVal++;
        }
        longestSequence = Math.max(curSequence, longestSequence);
      }

      return longestSequence;
    }

    longestConsecutive_sort(nums) {
      if (nums.length === 0) return 0;

      nums.sort((a, b) => a - b);

      let res = 0;
      let curVal = nums[0];
      let curSequence = 0;
      let i = 0;

      while (i < nums.length) {
        if (nums[i] !== curVal) {
          curVal = nums[i];
          curSequence = 0;
        }
        while (i < nums.length && nums[i] === curVal) {
          i++;
        }
        curSequence++;
        curVal++
        res = Math.max(res, curSequence);
      }

      return res;
    }

    longestConsecutive(nums) {
      const numSet = new Set(nums);
      let longestSequence = 0;

      for (let num of numSet) {
        if (!numSet.has(num - 1)) {
          let curSequence = 1;
          while (numSet.has(num + curSequence)) {
            curSequence++;
          }

          longestSequence = Math.max(longestSequence, curSequence);
        }
      }

      return longestSequence;
    }
}
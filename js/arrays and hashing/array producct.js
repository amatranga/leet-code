class Solution {
  /**
   * @param { number[] } nums
   * @return { number[] }
   */
  productExceptSelf_naive(nums) {
    // Brute force: iterate thru the array and compute the product of all indices except i
    const len = nums.length;
    const res = new Array(len);

    for (let i = 0; i < len; i++) {
      let product = 1;
      for (let j = 0; j < len; j++) {
        if (i !== j) {
          product *= nums[j];
        }
      }
      res[i] = product;
    }
    return res;
  }

  productExceptSelf_division(nums) {
    // check how many 0 are in nums.
    // more than 2 -> return array has all 0
    // 1 -> return array has all 0 except for index of 0 in input array
    // 0 -> calculate product divided by current index of input array

    let product = 1;
    let zeroCount = 0;

    nums.forEach(num => {
      if (num === 0) {
        zeroCount++;
      } else {
        product *= num;
      }
    });

    if (zeroCount > 1) {
      return new Array(nums.length).fill(0)
    }

    return nums.map(num => {
      if (zeroCount > 0) {
        return num === 0 ? product : 0;
      } else {
        return product / num;
      }
    });
  }

  productExceptSelf_prefixSuffix(nums) {
    // For every element in nums, calculate the product of all elements before and after it
    const len = nums.length;
    const prefixes = new Array(len);
    const suffixes = new Array(len);
    const result = new Array(len);

    prefixes[0] = 1;
    suffixes[len - 1] = 1;

    // build out prefixes array, iterating forward thru nums
    for (let i = 1; i < len; i++) {
      prefixes[i] = nums[i - 1] * prefixes[i - 1];
    }
    // build out suffixes array, iterating backwards thru nums
    for (let i = len - 2; i >= 0; i--) {
      suffixes[i] = nums[i + 1] * suffixes[i + 1];
    }

    // build out result array by multiplying corresponding indices of prefixes and suffixes
    for (let i = 0; i < nums.length; i++) {
      result[i] = prefixes[i] * suffixes[i];
    }

    return result;
  }

  productExceptSelf_postfix(nums) {
    const len = nums.length;
    const result = new Array(len).fill(1);
    let postfix = 1;

    // first pass, multiply all elements in result by the product of the elements to the left
    for (let i = 1; i < len; i++) {
      result[i] = result[i - 1] * nums[i - 1];
    }

    // second pass, multiply all elements in result by the product of the elements to the right
    for (let i = len - 1; i >= 0; i--) {
      result[i] *= postfix;
      postfix *= nums[i];
    }

    return result;
  }
}
class Solution {
  /**
   * @param { number[] } nums
   * @param { number } k
   * @return { number[] }
   */
  topKFrequent_naive(nums, k) {
    // create a tuple where key is number, value is count of number
    // sort tuples by count descending
    // return array from slicing sorted array from index 0 thru k
    // time complexity -- O(n log n)
    // space complexity -- O(n) (technically O(m*n), where m is num new objects created)
    const counts = {};
    for (let num of nums) {
      counts[num] = (counts[num] || 0) + 1
    }

    const entries = Object.entries(counts).sort((a, b) => a[1] < b[1]).slice(0, k);
    const newObj = Object.fromEntries(entries);
    return Object.values(newObj);
  }

  topKFrequent_bucket(nums, k) {
    // We know that answers are unique so...
    // build a count map which holds the numbers of nums and a count of each number
    // from that map, create a frequency array. Each index of frequency array holds the number that appears that many times
    // iterate backwards through frequency array. As soon as we've picked k items, return

    const counts = {};
    const frequency = Array.from({ length: nums.length + 1 }, () => []);
    const results = [];
    for (const num of nums) {
      counts[num] = (counts[num] || 0) + 1
    }

    for (const item in counts) {
      frequency[counts[item]].push(parseInt(item));
    }

    for (let i = frequency.length - 1; i > 0; i--) {
      for (const j of frequency[i]) {
        results.push(j);
        if (results.length === k) {
          return results;
        }
      }
    }
  }
}
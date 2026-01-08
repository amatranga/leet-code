class Solution {
  /**
   * @param { string[] } strs
   * @return { string[][]} 
   */

  groupAnagrams_sort(strs) {
    // sort each string, then group them using a hash map
    // time complexity -- O(m* n log n)
    // space complexity -- O(n)
    const anagrams = {};
    for (let str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!anagrams[sortedStr]) {
        anagrams[sortedStr] = [];
      }
      anagrams[sortedStr].push(str);
    }

    return Object.values(anagrams);
  }

  groupAnagrams_hashTable(strs) {
    // create a tuple where key is an array representing count of characters in a string
    // and value is string with that character count.
    const anagrams = {};
    for (let str of strs) {
      const charCount = new Array(26).fill(0);
      for (let char of str) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
      const key = charCount.join(',');
      if (!anagrams[key]) {
        anagrams[key] = [];
      }
      anagrams[key].push(str);
    }

    return Object.values(anagrams);
  }
}
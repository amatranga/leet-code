class Solution {
  /**
   * @param { string } s
   * @param { string } t
   * @return { boolean }
   */

  isAnagram_naive(s, t) {
    // sort each string then compare the 2 strings. If they are equal, then they are anagrams.
    // time complexity -- O(s log s + t log t)
    // space complexity -- O(s + t) or O(1) (depending on sorting algorithm)
    const sortS = s.sort((a, b) => a - b);
    const sortT = t.sort((a, b) => a - b);

    return sortS === sortT;
  }

  isAnagram_hashMap(s, t) {
    // First, if different lengths, immediately return false.
    // Then, create 2 hash maps from s and t. Key is the current letter, value is count of that letter.
    // Compare the hash maps -- if they are the same, then anagram.
    // time complexity -- O(n + m)
    // space complexity -- O(1) (we have 26 characters max)
    if (s.length !== t.length) { 
      return false;
    }
    const hashS = {};
    const hashT = {};

    for (let i = 0; i < s.length; i++) {
      hashS[s[i]] = (hashS[s[i]] || 0) + 1;
      hashT[t[i]] = (hashT[t[i]] || 0) + 1;
    }

    for (const key in hashS) {
      if (hashS[key] !== hashT[key]) {
        return false;
      }
    }

    return true;
  }

  isAnagram_hashTable(s, t) {
    // First, if different lengths, immediately return false.
    // Create an array of length 26 and initialize all indices to 0.
    // Iterate through both strings -- increment count at index corresponding to s[i]; decrement count at index corresponding to t[i]
    // At the end, if there are any indices not equal to 0, the 2 words are not anagrams
    // time complexity -- O(s + t)
    // space complexity O(1) (26 characters max)
    if (s.length !== t.length) {
      return false;
    }
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return counts.every(value => value === 0)
  }
}
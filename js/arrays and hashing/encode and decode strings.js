class Solution {
  /**
   * @param { string[] } strs
   * @return { string }
   */
  encode_naive(strs) {
    // join all strings in the input array.
    // use the length of the string as a separator

    const result = strs.map(str => (
      str.length + '#' + str
    ));
    return result.join('');
  }

  /**
   * 
   * @param { string } str 
   * @returns { string[] }
   */
  decode_naive(str) {
    // declare results array
    // start at beginning of string, read until delimiter (#)
    // this is the length of the string to follow
    // 
    // read from (delimiter_index) to (delimiter_index + str_length)
    // write to results array
    // repeat until end of string

    const results = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      results.push(str.substring(i, j));
      i = j;
    }
    return results;
  }

  encode(strs) {
    let result = '';
    for (let s of strs) {
      result += `${s.length}#${s}`
    }
    return result;
  }

  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      result.push(str.substring(i, j));
      i = j;
    }

    return result;
  }
}
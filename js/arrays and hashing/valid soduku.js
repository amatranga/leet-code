class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      const boardLength = board.length;
      const rows = new Map();
      const cols = new Map();

      // Rows: iterate thru board. For each row in board, add a hash set to rows
      // rowNumber: {}
      // For each item in the row, if it is a number, attempt to add it to set. If already exist, return false

      for (let i = 0; i < boardLength; i++) {
        const curRow = board[i];
        const notEmpty = curRow.filter(r => r !== '.');
        const rowSet = new Set(notEmpty);

        if (rowSet.size !== notEmpty.length) {
          return false;
        }

        rows.set(i, rowSet);
      }

      console.log(rows);
    }
}

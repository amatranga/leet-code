class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku_brute(board) {
      // check rows and cols
      for (let row = 0; row < 9; row++) {
        const rowSet = new Set();
        const colSet = new Set();
        
        for (let col = 0; col < 9; col++) {
          // rows
          const curRowVal = board[row][col];
          if (curRowVal === '.') continue;
          if (rowSet.has(curRowVal)) return false;
          rowSet.add(curRowVal);
          
          // cols
          const curColVal = board[col][row];
          if (curColVal === '.') continue;
          if (colSet.has(curColVal)) return false;
          colSet.add(curColVal);
        }
      }

      // check squares
      for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
          const boxSet = new Set();
          const startRow = boxRow * 3;
          const startCol = boxCol * 3;

          for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
              const val = board[r][c];
              if (val === '.') continue;
              if (boxSet.has(val)) return false;
              boxSet.add(val);
            }
          }
        }
      }

      return true;
    }

    isValidSoduku(board) {
      const cols = new Map();
      const rows = new Map();
      const squares = new Map();

      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          const curVal = board[r][c];
          if (curVal === '.') continue;

          const squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;
          const inRow = rows.get(r) && rows.get(r).has(curVal);
          const inCol = cols.get(c) && cols.get(c).has(curVal);
          const inSquare = squares.get(squareKey) && squares.get(squareKey).has(curVal);
          if (inRow || inCol || inSquare) return false;

          if (!rows.has(r)) rows.set(r, new Set());
          if (!cols.has(c)) cols.set(c, new Set());
          if (!squares.has(squareKey)) squares.set(squareKey, new Set());

          rows.get(r).add(curVal);
          cols.get(c).add(curVal);
          squares.get(squareKey).add(curVal);
        }
      }

      return true;
    }
}

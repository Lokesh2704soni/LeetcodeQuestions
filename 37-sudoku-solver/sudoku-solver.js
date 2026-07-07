/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    // Initialize the sets with existing numbers
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let num = board[i][j];
                rows[i].add(num);
                cols[j].add(num);
                boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(num);
            }
        }
    }

    // Backtracking function
    function backtrack() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let k = 1; k <= 9; k++) {
                        let num = k.toString();
                        if (!rows[i].has(num) && !cols[j].has(num) && !boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(num)) {
                            board[i][j] = num;
                            rows[i].add(num);
                            cols[j].add(num);
                            boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(num);

                            if (backtrack()) {
                                return true;
                            }

                            board[i][j] = '.';
                            rows[i].delete(num);
                            cols[j].delete(num);
                            boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].delete(num);
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    backtrack();
};
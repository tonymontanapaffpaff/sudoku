module.exports = function solveSudoku(matrix) {
  // your solution
  let zero = findZero(matrix);
  if (!!zero){
    let row = zero[0];
    let col = zero[1];
    for (let num = 1; num < 10; num++) {
      if (checkUnique(matrix, row, col, num)) {   
        matrix[row][col] = num;
        if (solveSudoku(matrix)) {                
          return matrix;
        }  
        matrix[row][col] = 0;
      }
    }
  }else{
    return matrix;
  }
}

function findZero(matrix) {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++)
      if (matrix[i][j] == 0) 
        return [i, j];
  return false;
}

function checkUnique(matrix, row, col, num){ 
  for (let i = 0; i < 9; i++){
    if (matrix[row][i] == num || matrix[i][col] == num){
      return false;
    }
  }
  let row1 = Math.floor(row/3)*3;
  let col1 = Math.floor(col/3)*3;
  for (let i = row1; i < row1+3; i++) {
    for (let j = col1; j < col1+3; j++) {
      if (matrix[i][j] == num) {
        return false;
      }
    }
  }
  return true;  
};


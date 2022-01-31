//ALGORITMA 4
const subDiagonal = (matrix) => {
  let firstDiagonal = [];
  let secDiagonal = [];

  for (i = 0; i < matrix.length; i++) {
    firstDiagonal.push(matrix[i][i]);

    let secIndex = i + 1;
    secDiagonal.push(matrix[i][matrix[i].length - secIndex]);
  }

  // reducer value of each diagonal
  let firstDiagonalSum = firstDiagonal.reduce(
    (currValue, a) => currValue + a,
    0
  );

  let secDiagonalSum = secDiagonal.reduce((currValue, a) => currValue + a, 0);

  // substraction firstDiagonalSum - secDiagonalSum
  let resultDiaginalSum = firstDiagonalSum - secDiagonalSum;

  // Output text
  console.log(
    `diagonal pertama = ${firstDiagonal.join(" + ")} = ${firstDiagonalSum}`
  );

  console.log(
    `diagonal kedua = ${secDiagonal.join(" + ")} = ${secDiagonalSum}`
  );

  console.log(
    `maka hasilnya adalah ${firstDiagonalSum} - ${secDiagonalSum} = ${resultDiaginalSum}`
  );
};

// let MATRIX = [[1,2,0,2],[4,5,6,7],[7,8,9,5],[1,2,3,4]];
let MATRIX = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
subDiagonal(MATRIX);

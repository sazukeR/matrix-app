export const rotateMatrix = (
 matrix: (string | number)[][]
): (string | number)[][] => {
 const rowsCount = matrix.length;
 const columnsCount = matrix[0].length;

 const rotatedMatrix = Array.from({ length: columnsCount }, () =>
  Array(rowsCount).fill("")
 );

 for (let i = 0; i < rowsCount; i++) {
  for (let j = 0; j < columnsCount; j++) {
   rotatedMatrix[columnsCount - 1 - j][i] = matrix[i][j];
  }
 }

 return rotatedMatrix;
};

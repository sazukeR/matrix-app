export const rotateMatrix = (matrix: string[][]): string[][] => {
 const rowsCount = matrix.length;
 const columnsCount = matrix[0].length;

 return matrix.reduce<string[][]>(
  (rotatedMatrix, row, i) => {
   row.forEach((value, j) => {
    rotatedMatrix[columnsCount - 1 - j][i] = value;
   });
   return rotatedMatrix;
  },
  Array.from({ length: columnsCount }, () => Array(rowsCount).fill(""))
 );
};

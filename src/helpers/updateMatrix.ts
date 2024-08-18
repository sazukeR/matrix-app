export const updateMatrix = (
 rows: number,
 columns: number,
 inputValue: string,
 matrix: (string | number)[][]
) => {
 const rowsCount = Math.max(rows, 1);
 const columnsCount = Math.max(columns, 1);
 const newMatrix = [...matrix];

 newMatrix.forEach((row, rowIndex) =>
  row.forEach((_, colIndex) => {
   newMatrix[rowIndex][colIndex] = "";
  })
 );

 inputValue.split("").forEach((num, index) => {
  const rowIndex = Math.floor(index / columnsCount);
  const colIndex = index % columnsCount;
  newMatrix[rowIndex][colIndex] = parseInt(num);
 });

 return newMatrix;
};

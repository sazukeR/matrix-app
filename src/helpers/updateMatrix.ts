export const updateMatrix = (
 rows: number,
 columns: number,
 inputValue: string
): string[][] => {
 const columnsCount = Math.max(columns, 1);
 const newMatrix = Array(rows)
  .fill(null)
  .map(() => Array(columnsCount).fill(""));

 inputValue.split("").forEach((num, index) => {
  const rowIndex = Math.floor(index / columnsCount);
  const colIndex = index % columnsCount;
  if (rowIndex < rows && colIndex < columnsCount) {
   newMatrix[rowIndex][colIndex] = num;
  }
 });

 return newMatrix;
};

export const generateMatrix = (rows: number, columns: number): string[][] => {
 const rowsCount: number = Math.max(rows, 1);
 const columnsCount: number = Math.max(columns, 1);

 return Array.from({ length: rowsCount }, () => Array(columnsCount).fill(""));
};

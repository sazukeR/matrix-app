export const validateInput = (
 value: string,
 rows: number,
 columns: number
): boolean => {
 const rowsCount = Math.max(rows, 1);
 const columnsCount = Math.max(columns, 1);

 return value.length <= rowsCount * columnsCount && /^[0-9]*$/.test(value);
};

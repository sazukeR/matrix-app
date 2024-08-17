import { useEffect, useState, ChangeEvent } from "react";

export const useMatrix = () => {
 const [rows, setRows] = useState<number>(0);
 const [columns, setColumns] = useState<number>(0);
 const [matrix, setMatrix] = useState<(number | string)[][]>([]);
 const [originalMatrix, setOriginalMatrix] = useState<(number | string)[][]>(
  []
 );
 const [inputValue, setInputValue] = useState<string>("");
 const [currentIndex, setCurrentIndex] = useState<number>(0);
 const [showRotate, setShowRotate] = useState(true);

 const handleRowsChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setRows(parseInt(e.target.value));
 };

 const handleColumnsChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setColumns(parseInt(e.target.value));
 };

 const handleRotateClick = () => {
  if (showRotate) {
   setOriginalMatrix([...matrix]);

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

   setMatrix(rotatedMatrix);
  } else {
   setMatrix(originalMatrix);
  }
  setShowRotate(!showRotate);
 };

 useEffect(() => {
  const rowsCount: number = Math.max(rows, 1);
  const columnsCount: number = Math.max(columns, 1);

  const newMatrix = Array.from({ length: rowsCount }, () =>
   Array(columnsCount).fill("")
  );
  setMatrix(newMatrix);
  setOriginalMatrix(newMatrix);
  setCurrentIndex(0);
  setInputValue("");
 }, [rows, columns]);

 useEffect(() => {
  const rowsCount = Math.max(rows, 1);
  const columnsCount = Math.max(columns, 1);

  if (inputValue.length <= rowsCount * columnsCount) {
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

   setMatrix(newMatrix);
   setCurrentIndex(inputValue.length);
  }
 }, [inputValue]);

 const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  const rowsCount = Math.max(rows, 1);
  const columnsCount = Math.max(columns, 1);

  if (value.length <= rowsCount * columnsCount && /^[0-9]*$/.test(value)) {
   setInputValue(value);
  }
 };

 return {
  // properties
  rows,
  columns,
  inputValue,
  matrix,
  showRotate,
  // methods
  handleRowsChange,
  handleColumnsChange,
  handleInputChange,
  handleRotateClick,
 };
};

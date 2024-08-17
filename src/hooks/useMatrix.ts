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
   // Guardar la matriz actual como original si no se ha guardado antes
   setOriginalMatrix([...matrix]);

   const rowsCount = matrix.length;
   const columnsCount = matrix[0].length;

   // Crear una nueva matriz rotada
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
   // Restaurar la matriz original
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
  setOriginalMatrix(newMatrix); // También actualizar la matriz original
  setCurrentIndex(0);
  setInputValue(""); // Reiniciar el input si cambian las filas o columnas
 }, [rows, columns]);

 useEffect(() => {
  const rowsCount = Math.max(rows, 1);
  const columnsCount = Math.max(columns, 1);

  if (inputValue.length <= rowsCount * columnsCount) {
   const newMatrix = [...matrix];

   // Reiniciar la matriz
   newMatrix.forEach((row, rowIndex) =>
    row.forEach((_, colIndex) => {
     newMatrix[rowIndex][colIndex] = "";
    })
   );

   // Llenar la matriz con los valores del input
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
  // propiedades
  rows,
  columns,
  inputValue,
  matrix,
  showRotate,
  // métodos
  handleRowsChange,
  handleColumnsChange,
  handleInputChange,
  handleRotateClick,
 };
};

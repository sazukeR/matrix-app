import { useEffect, useState, ChangeEvent } from "react";
import {
 generateMatrix,
 rotateMatrix,
 updateMatrix,
 validateInput,
} from "@/helpers";

export const useMatrix = () => {
 const [rows, setRows] = useState<number>(() => {
  const storedRows = localStorage.getItem("rows");
  return storedRows ? parseInt(storedRows) : 1;
 });

 const [columns, setColumns] = useState<number>(() => {
  const storedColumns = localStorage.getItem("columns");
  return storedColumns ? parseInt(storedColumns) : 1;
 });

 const [matrix, setMatrix] = useState<string[][]>(() => {
  const storedMatrix = localStorage.getItem("matrix");
  return storedMatrix ? JSON.parse(storedMatrix) : generateMatrix(1, 1);
 });

 const [originalMatrix, setOriginalMatrix] = useState<string[][]>(() => {
  const storedOriginalMatrix = localStorage.getItem("originalMatrix");
  return storedOriginalMatrix
   ? JSON.parse(storedOriginalMatrix)
   : generateMatrix(1, 1);
 });

 const [inputValue, setInputValue] = useState<string>(() => {
  return localStorage.getItem("inputValue") || "";
 });

 const [showRotate, setShowRotate] = useState<boolean>(() => {
  const storedShowRotate = localStorage.getItem("showRotate");
  return storedShowRotate ? JSON.parse(storedShowRotate) : true;
 });

 const handleRowsChange = (e: ChangeEvent<HTMLSelectElement>): void => {
  const newRows = parseInt(e.target.value);
  setRows(newRows);
  setInputValue("");
 };

 const handleColumnsChange = (e: ChangeEvent<HTMLSelectElement>): void => {
  const newColumns = parseInt(e.target.value);
  setColumns(newColumns);
  setInputValue("");
 };

 const handleRotate = (): void => {
  if (showRotate) {
   setOriginalMatrix([...matrix]);
   const rotatedMatrix = rotateMatrix(matrix);
   setMatrix(rotatedMatrix);
  } else {
   setMatrix(originalMatrix);
  }
  setShowRotate(!showRotate);
 };

 const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  if (validateInput(value, rows, columns)) {
   setInputValue(value);
  }
 };

 useEffect(() => {
  if (matrix.length !== rows || (matrix[0] && matrix[0].length !== columns)) {
   const newMatrix = generateMatrix(rows, columns);
   setMatrix(newMatrix);
   if (showRotate) {
    setOriginalMatrix(newMatrix);
   }
  }
 }, [rows, columns]);

 useEffect(() => {
  if (inputValue.length <= rows * columns) {
   const newMatrix = updateMatrix(rows, columns, inputValue);
   setMatrix(newMatrix);
  }
 }, [inputValue]);

 useEffect(() => {
  localStorage.setItem("rows", rows.toString());
  localStorage.setItem("columns", columns.toString());
  localStorage.setItem("matrix", JSON.stringify(matrix));
  localStorage.setItem("originalMatrix", JSON.stringify(originalMatrix));
  localStorage.setItem("inputValue", inputValue);
  localStorage.setItem("showRotate", JSON.stringify(showRotate));
 }, [rows, columns, matrix, originalMatrix, inputValue, showRotate]);

 useEffect(() => {
  if (!showRotate) {
   const storedMatrix = localStorage.getItem("matrix");
   if (storedMatrix) {
    setMatrix(JSON.parse(storedMatrix));
   }
  }
 }, [showRotate]);

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
  handleRotate,
 };
};

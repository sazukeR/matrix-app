import { useEffect, useState, ChangeEvent } from "react";

import {
 generateMatrix,
 rotateMatrix,
 updateMatrix,
 validateInput,
} from "@/helpers";

export const useMatrix = () => {
 const [rows, setRows] = useState<number>(0);
 const [columns, setColumns] = useState<number>(0);
 const [matrix, setMatrix] = useState<string[][]>([]);
 const [originalMatrix, setOriginalMatrix] = useState<string[][]>([]);
 const [inputValue, setInputValue] = useState<string>("");
 const [showRotate, setShowRotate] = useState<boolean>(true);

 const handleRowsChange = (e: ChangeEvent<HTMLSelectElement>): void => {
  setRows(parseInt(e.target.value));
 };

 const handleColumnsChange = (e: ChangeEvent<HTMLSelectElement>): void => {
  setColumns(parseInt(e.target.value));
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
  setRows(1);
  setColumns(1);
 }, []);

 useEffect(() => {
  const newMatrix = generateMatrix(rows, columns);
  setMatrix(newMatrix);
  setOriginalMatrix(newMatrix);
  setInputValue("");
 }, [rows, columns]);

 useEffect(() => {
  if (inputValue.length <= Math.max(rows, 1) * Math.max(columns, 1)) {
   const newMatrix = updateMatrix(rows, columns, inputValue);
   setMatrix(newMatrix);
  }
 }, [inputValue]);

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

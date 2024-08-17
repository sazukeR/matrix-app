"use client";

import { useMatrix } from "@/hooks/useMatrix";

export default function HomePage() {
 const {
  matrix,
  rows,
  columns,
  showRotate,
  inputValue,
  handleColumnsChange,
  handleRowsChange,
  handleInputChange,
  handleRotateClick,
 } = useMatrix();

 return (
  <div className="container">
   <div className="controls">
    <label className={`${!showRotate ? "orange" : ""}`}>
     Filas:
     <select
      disabled={!showRotate}
      value={rows || ""}
      onChange={handleRowsChange}
     >
      <option value="" disabled></option>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
       <option key={number} value={number}>
        {number}
       </option>
      ))}
     </select>
    </label>

    <label className={`${!showRotate ? "orange" : ""}`}>
     Columnas:
     <select
      disabled={!showRotate}
      value={columns || ""}
      onChange={handleColumnsChange}
     >
      <option value="" disabled></option>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
       <option key={number} value={number}>
        {number}
       </option>
      ))}
     </select>
    </label>

    <input
     type="text"
     value={inputValue}
     onChange={handleInputChange}
     placeholder="Añadir números"
     disabled={(rows === 0 && columns === 0) || !showRotate}
    />
   </div>

   <div className="boxTable">
    <div className="tableContainer">
     <table className="matrixTable">
      <tbody>
       {matrix.map((row, rowIndex) => (
        <tr key={rowIndex}>
         {row.map((cell, colIndex) => (
          <td key={colIndex}>{cell}</td>
         ))}
        </tr>
       ))}
      </tbody>
     </table>
     <div className={`rotate-container ${!showRotate ? "rotate" : ""}`}></div>
    </div>
   </div>

   <div className="buttonsContainer">
    {showRotate ? (
     <button
      disabled={rows > 0 || columns > 0 ? false : true}
      className="buttonRotate"
      onClick={handleRotateClick}
     >
      Girar
     </button>
    ) : (
     <button className="buttonReset" onClick={handleRotateClick}>
      Restablecer
     </button>
    )}
   </div>
  </div>
 );
}

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

 console.log(showRotate);

 return (
  <div className="container">
   <div className="controls">
    <label>
     Filas:
     <select
      disabled={!showRotate}
      value={rows || ""}
      onChange={handleRowsChange}
     >
      <option value="" disabled>
       Seleccione filas
      </option>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
       <option key={number} value={number}>
        {number}
       </option>
      ))}
     </select>
    </label>

    <label>
     Columnas:
     <select
      disabled={!showRotate}
      value={columns || ""}
      onChange={handleColumnsChange}
     >
      <option value="" disabled>
       Seleccione columnas
      </option>
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

   <div>
    <p>Cantidad de filas seleccionadas: {rows}</p>
    <p>Cantidad de columnas seleccionadas: {columns}</p>
   </div>

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
   </div>

   <div className="buttonsContainer">
    {showRotate ? (
     <button
      disabled={rows > 0 || columns > 0 ? false : true}
      className="buttonRotate"
      onClick={handleRotateClick}
     >
      Rotate
     </button>
    ) : (
     <button className="buttonReset" onClick={handleRotateClick}>
      Reset
     </button>
    )}
   </div>
   {rows > 0 || columns > 0 ? (
    <></>
   ) : (
    <p>Debe seleccionar al menos una fila o columna</p>
   )}
  </div>
 );
}

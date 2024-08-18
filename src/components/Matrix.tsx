"use client";

import { useMatrix } from "@/hooks/useMatrix";
import { Inputs, Table, Buttons } from "@/components";

export const Matrix = () => {
 const {
  matrix,
  rows,
  columns,
  showRotate,
  inputValue,
  handleColumnsChange,
  handleRowsChange,
  handleInputChange,
  handleRotate,
 } = useMatrix();

 return (
  <div className="container">
   {/* <div className="controls">
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
   </div> */}

   <Inputs
    showRotate={showRotate}
    rows={rows}
    columns={columns}
    inputValue={inputValue}
    handleRowsChange={handleRowsChange}
    handleColumnsChange={handleColumnsChange}
    handleInputChange={handleInputChange}
   />

   {/* <div className="boxTable">
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
   </div> */}

   <Table matrix={matrix} showRotate={showRotate} />

   {/* <div className="buttonsContainer">
    {showRotate ? (
     <button
      disabled={rows > 0 || columns > 0 ? false : true}
      className="buttonRotate"
      onClick={handleRotate}
     >
      Girar
     </button>
    ) : (
     <button className="buttonReset" onClick={handleRotate}>
      Restablecer
     </button>
    )}
   </div> */}

   <Buttons
    showRotate={showRotate}
    rows={rows}
    columns={columns}
    handleRotate={handleRotate}
   />
  </div>
 );
};

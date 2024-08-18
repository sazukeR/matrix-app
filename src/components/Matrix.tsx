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
   <Inputs
    showRotate={showRotate}
    rows={rows}
    columns={columns}
    inputValue={inputValue}
    handleRowsChange={handleRowsChange}
    handleColumnsChange={handleColumnsChange}
    handleInputChange={handleInputChange}
   />

   <Table matrix={matrix} showRotate={showRotate} />

   <Buttons
    showRotate={showRotate}
    rows={rows}
    columns={columns}
    handleRotate={handleRotate}
   />
  </div>
 );
};

import { ChangeEvent } from "react";

interface Props {
 showRotate: boolean;
 rows: number;
 columns: number;
 inputValue: string;
 handleRowsChange: (e: ChangeEvent<HTMLSelectElement>) => void;
 handleColumnsChange: (e: ChangeEvent<HTMLSelectElement>) => void;
 handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs = ({
 showRotate,
 rows,
 columns,
 inputValue,
 handleRowsChange,
 handleColumnsChange,
 handleInputChange,
}: Props) => {
 return (
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
 );
};

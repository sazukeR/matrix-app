import { TableRow } from "@/components";

interface Props {
 matrix: (string | number)[][];
 showRotate: boolean;
}

export const Table = ({ matrix, showRotate }: Props) => {
 return (
  <div className="boxTable">
   <div className="tableContainer">
    <table className="matrixTable">
     <tbody>
      {matrix.map((row, rowIndex) => (
       <TableRow key={rowIndex} row={row} />

       // <tr key={rowIndex}>
       //  {row.map((cell, colIndex) => (
       //   <td key={colIndex}>{cell}</td>
       //  ))}
       // </tr>
      ))}
     </tbody>
    </table>
    <div className={`rotate-container ${!showRotate ? "rotate" : ""}`}></div>
   </div>
  </div>
 );
};

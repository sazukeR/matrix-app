import { TableRow } from "@/components";

interface Props {
 matrix: string[][];
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
      ))}
     </tbody>
    </table>
    <div className={`rotate-container ${!showRotate ? "rotate" : ""}`}></div>
   </div>
  </div>
 );
};

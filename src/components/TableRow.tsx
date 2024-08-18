interface Props {
 row: string[];
}
export const TableRow = ({ row }: Props) => {
 return (
  <tr>
   {row.map((cell, colIndex) => (
    <td key={colIndex}>{cell}</td>
   ))}
  </tr>
 );
};

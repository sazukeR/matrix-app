interface Props {
 row: (string | number)[];
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

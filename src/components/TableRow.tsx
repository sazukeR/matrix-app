import Link from "next/link";

interface Props {
 row: string[];
}
export const TableRow = ({ row }: Props) => {
 return (
  <tr>
   {row.map((cell, colIndex) => (
    <td key={colIndex}>
     <Link href={`/items/${cell}`}>{cell} </Link>
    </td>
   ))}
  </tr>
 );
};

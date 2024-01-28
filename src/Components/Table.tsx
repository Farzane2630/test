import "./Table.css"

interface User {
   id: number
}

export interface DataTableProps<T extends User> {
   data: T[]
   columns: {
      Header: string
      accessor: keyof T
   }[]
}


const Table = <T extends User>({ data, columns }: DataTableProps<T>) => {
   return (
      <table>
         <thead>
            <tr>
               {columns.map((column, index) => (
                  <th key={index}>{column.Header}</th>
               ))}
            </tr>
         </thead>
         <tbody>
            {data.map((item) => (
               <tr key={item.id}>
                  {columns.map((column, index) => (
                     <td key={index}>{item[column.accessor]}</td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default Table;

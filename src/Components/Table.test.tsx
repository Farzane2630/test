import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DataTable, { DataTableProps } from './Table';

// Mock data
const mockData = [
   { id: 1, name: 'John Doe', age: 25 }, 
 ];

// Mock columns
const mockColumns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
];

describe('DataTable', () => {
  it('renders table with correct data and columns', () => {
    const dataTableProps: DataTableProps<typeof mockData[0]> = {
      data: mockData,
      columns: mockColumns,
    };

    render(<DataTable {...dataTableProps} />);

    //table headers 
    mockColumns.forEach((column) => {
      const headerElement = screen.getByText(column.Header);
      expect(headerElement).toBeInTheDocument();
    });

    //data 
    mockData.forEach((item) => {
      Object.values(item).forEach((value) => {
        const cellElement = screen.getByText(value.toString());
        expect(cellElement).toBeInTheDocument();
      });
    });
  });
});

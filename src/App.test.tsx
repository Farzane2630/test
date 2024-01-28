import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./Utils/Data', () => ({
  usersData: {
    ordinary: [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Alice Smith', age: 30 },
    ],
    employees: [
      { id: 101, fullName: 'Jane Doe', position: 'Software Engineer' },
      { id: 102, fullName: 'Charlie Brown', position: 'Product Manager' },
    ],
  },
}));

describe('App', () => {
  it('renders App component with Ordinary Users DataTable initially', () => {
    render(<App />);
    expect(screen.getByText('Ordinary Users DataTable')).toBeInTheDocument();

    // table headers 
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // table data 
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
  });

  it('switches to Employees DataTable when button is clicked', () => {
    render(<App />);

    // switch button
    fireEvent.click(screen.getByText('Switch to Employees'));

    // header text update
    expect(screen.getByText('Employees DataTable')).toBeInTheDocument();

    // table headers update
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Position')).toBeInTheDocument();

    // table data update
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
  });
});

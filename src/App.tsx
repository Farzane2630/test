import { useMemo, useState } from 'react'
import './App.css'
import { usersData } from "./Utils/Data"
import Table from './Components/Table'

interface User {
  id: number
}

interface Employee extends User {
  fullName: string
  position: string
}

interface Ordinary extends User {
  age: number
  name: string
}


function App() {

  const [userType, setUserType] = useState<'Employee' | 'Ordinary'>('Ordinary')

  const ordinaryUsersData: Ordinary[] = usersData.ordinary
  const employeeUsersData: Employee[] = usersData.employees

  const columns = useMemo(() => {
    return userType === 'Ordinary'
      ? [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age' },
      ]
      : [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Full Name', accessor: 'fullName' },
        { Header: 'Position', accessor: 'position' },
      ];
  }, [userType])

  const data = useMemo(() => {
    return userType === 'Ordinary' ? ordinaryUsersData : employeeUsersData;
  }, [userType, ordinaryUsersData, employeeUsersData]);


  return (
    <div className="container">
      <h2>{userType === 'Ordinary' ? 'Ordinary Users' : 'Employees'} DataTable</h2>
      {/* @ts-ignore */}
      <Table data={data} columns={columns} />

      <button onClick={() => setUserType(userType === 'Ordinary' ? 'Employee' : 'Ordinary')}>
        Switch to {userType === 'Ordinary' ? 'Employees' : 'Ordinary Users'}
      </button>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapDemo from './Component/MapDemo'
import FacultyDemo from './Component/Faculties'
import StudentDemo from './Component/Student'
import ProductDemo from './Component/Product'
import FacultyTable from './Component/facultyTable'
import StudentTable from './Component/StudentTable'
import ProductTable from './Component/ProductTable'

function App() {

  return (
    <>
      {/* <MapDemo /> */}
      <FacultyDemo />
      <StudentDemo />
      <ProductDemo />
      <FacultyTable />
      <StudentTable />
      <ProductTable />
      
    </>
  )
}

export default App

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
import Home from './Lab_17/pages/home'
import About from './Lab_17/pages/about'
import Contact from './Lab_17/pages/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Goal from './Lab_17/pages/goal'
import Header from './Lab_17/parts/header'
import Layout from './Lab_17/parts/layout'
import Vision from './Lab_17/pages/vision'

function App() {

  return (
    <>
      {/* <MapDemo /> */}
      {/* <FacultyDemo />
      <StudentDemo />
      <ProductDemo />
      <FacultyTable />
      <StudentTable />
      <ProductTable /> */}
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />}></Route>
            <Route path='/home' element={<FacultyDemo />}></Route>
            <Route path='/about' element={<FacultyTable />}></Route>
            <Route path='/contact' element={<ProductDemo/>}></Route>
            <Route path='/goal' element={<ProductTable/>}></Route>
            <Route path='/vision' element={<StudentDemo/>}></Route>
            <Route path='/StudentTable' element={<StudentTable/>}></Route>

          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App

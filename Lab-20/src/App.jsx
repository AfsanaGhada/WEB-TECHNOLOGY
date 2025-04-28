import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCRUD from'./Products'
import StudentCRUD from './Students'
import FacultyCRUD from './faculties'
import StudentCRUD1 from './Lab_21/MockApiCrud'
import UserList from './Lab_21/UserList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <ProductCRUD/>
        <StudentCRUD/>
        <FacultyCRUD/> */}
        <StudentCRUD1 />
        <UserList />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Logo'
import Menu from './Components/Menu'
import Content from './Components/Content'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'



function App() {
  return (<>
  <div className='container'>
    <div className='Row d-flex '>
      <div className=' d-flex'>
        <Logo/>
      </div>
      <div className='content-area p-3 w-100  '>
        <Menu/>
      </div>
    </div>
  <div className="d-flex flex-column ">
      <div className="d-flex">
        <Sidebar />
        <div className="content-area p-3 w-100">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
    </div>
    </>
    
    

  );
}

export default App;
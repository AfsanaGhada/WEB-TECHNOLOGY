import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateDemo from './Hooks/UseState'
import UseEffectDemo from './Hooks/UseEffect'
import UseEffectDemo2 from './Hooks/UseEffectDemo2'
import NemeRender from './Hooks/usestateNameRender'
import Calculator from './Lab_19/calculator'
import Scientific_Calculator from './Lab_19/Scientific_Calculator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <UseStateDemo />
        <UseEffectDemo /> */}
        {/* <UseEffectDemo2 /> */}
        {/* <NemeRender /> */}
        {/* <div>
            <h1>Simple Calculator</h1>
            <Calculator />
        </div> */}
        <div>
          <h2>Scintific Calculator</h2>
          <Scientific_Calculator />
        </div>
    </>
  )
}

export default App


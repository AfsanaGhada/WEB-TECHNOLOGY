import { useState } from 'react'
function UseStateDemo(){
    const [count,setcount]=useState(0);

return(
    <>

    <h1>Count {count}</h1>
    <button onClick={()=>{
        setcount(count+1);
    }}>Increment</button>

    </>
)
}
export default UseStateDemo

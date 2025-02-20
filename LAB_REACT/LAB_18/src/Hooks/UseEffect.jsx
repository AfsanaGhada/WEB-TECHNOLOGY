import { useEffect } from 'react'
function UseEffectDemo(){
    console.log("Render")
    useEffect(()=>{
        console.log("interval set")
        setInterval(()=>{
            console.log("Hello World");
        },10000);
    },[]);
        
    }
export default UseEffectDemo

import { useState } from 'react'
function NemeRender(){
    const [name,setname]=useState("Afsana");
    console.log("App Component Render")

return(
    <>
    <h1>{name}</h1>
    <input type="text" onChange={(e)=>{
        setname(e.target.value)
    }}/>

    

    </>
)
}
export default NemeRender

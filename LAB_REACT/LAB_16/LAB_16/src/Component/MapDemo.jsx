import React from "react";
const fruit=["Apple","Banana","Guavava","Orange"]
function MapDemo(){
    return(
        <div>
            {
            fruit.map((fruit,index)=>{
                return <h1>{fruit}-{index}</h1>
            })}
        </div>
    )
}
export default MapDemo
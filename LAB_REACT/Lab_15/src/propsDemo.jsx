import react from "react"
function ChildComponent(props){
    return <h1>{props.massage}</h1>;

}
function ParentComponent(){
    return <ChildComponent massage="Hello, this is passed via props!!!!!" />

}
export default ParentComponent ;
function EventHandle(){
    const handleEvent = () => {
        console.log("Hello World");

    };
    return(
        <div>
            <button onClick={handleEvent}>Click me</button>
        </div>
    )
}
export default EventHandle;

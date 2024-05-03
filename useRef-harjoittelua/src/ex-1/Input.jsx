import {useRef} from "react"

const Input = () => {
    const inputRef = useRef(null);
    console.log(inputRef);
    
    function focus() {
        // const input = document.querySelector('input');
        // input.focus();
        console.log(inputRef);
        inputRef.current.focus();
    }


    return (
        <>
            <input type="text" ref={inputRef}/>  
            <button onClick={focus}>Focus!</button>  
        </>
    );
}
 
export default Input;
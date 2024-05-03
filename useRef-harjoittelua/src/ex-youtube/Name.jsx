import {useState, useRef, useEffect} from 'react';

const Name = () => {
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name;
        console.log("prevname", prevName)
    }, [name]);

    function confirmName() {
        if (inputRef.current) setName(inputRef.current.value)
    }
    console.log("name", name);


    return (
        <div>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={confirmName}>Confirm Name</button>
            </div>
            <div>My name is {name}</div>
            <div>Erlier my name was {prevName.current}</div>
        </div>
    );
};

export default Name;
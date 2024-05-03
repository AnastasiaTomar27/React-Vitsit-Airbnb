// Difference between useState and useRef 

import {useState, useRef, useEffect} from 'react';

const UseState_UseRef = () => {
    const [name, setName] = useState('');
    //const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        //setRenderCount((prev) => prev + 1);
        renderCount.current++;
    });

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name}</div>
            {/* <div>Number of re-renders {renderCount}</div> */}
            <div>Number of re-renders {renderCount.current}</div>
        </div>
    )
}

export default UseState_UseRef;
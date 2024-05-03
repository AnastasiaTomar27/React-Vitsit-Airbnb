import {useEffect, useRef} from 'react';

// const UseRef = () => {
//     const ref = useRef(null);

//     console.log(ref);
//     // {current: null}

//     useEffect(() => {
//         console.log(ref);
//         // {current: h1}
//     }, []);

//     return (
//         <h1 ref={ref}>Reference</h1>
//     );
// }
 
// export default UseRef;

//---------------------------------------------------

const UseRef = () => {
    //const ref = useRef("hello");
    const ref = useRef(0);
    const domRef = useRef(null);

    console.log(ref);
    console.log(domRef);

    ref.hello = "hello";
    ref.animal = "monkey";

    function handleClick() {
        ref.current++;
        console.log(ref);
    }

    useEffect(() => {
        console.log('ref changed!', ref);
        console.log(domRef);
    })

    // useEffect(() => {
    //     domRef.current = document.querySelector('h1')
    // }, [])

    // useEffect(() => {
    //     domRef.current.textContent = "Boo!";
    // }, [])

    return (
        <>
            {/* <p>{ref.current}</p> */}
            <h1>useRef hook</h1>
            <h1 ref={domRef}>domRef!</h1>
            <button onClick={handleClick}>Click</button>
        </>
    );
}
 
export default UseRef;
import {useEffect, useRef, useState} from 'react';

const Form = () => {
    const formRef = useRef(null);
    const [pText, setPText] = useState("");

    function submitForm(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        let paraText = "";

        // for (const [k, v] of formData) {
        //     console.log(k, v);
        // }
        for (const [name, value] of formData) {
            paraText += `${name}: ${value} / `
        }

        setPText(paraText);
    }

    useEffect(() => {
        //document.getElementById('MyForm').reset();
        formRef.current.reset();
    }, [pText])

    return (
        <>
            <form id="MyForm" ref={formRef} onSubmit={submitForm}>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="abc@123.com" />
                <input type="number" name="age" placeholder="20" />
                <button type="submit">Submit</button>
            </form>
            <p>{pText}</p>
        </>
    );
}
 
export default Form;
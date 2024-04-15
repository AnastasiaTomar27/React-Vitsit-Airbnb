// const Button = ({setLoggedInTeksti}) => {
//     const handleClick = () => {
//         setLoggedInTeksti(prevTeksti => prevTeksti ==="Logged out"? "Logged in" : "Logged out")    
//     }
//     return (
//         <button onClick={handleClick}>Toggle Login</button>
//     );
// }
 
// export default Button;

const Button = ({setLoggedInTeksti, loggedInTeksti}) => {
    const handleClick = () => {
        if (loggedInTeksti === 'logged in') {
            setLoggedInTeksti('logged out');
        } else {
            setLoggedInTeksti('logged in');
        }
    }
    return (
        <button onClick={handleClick}>Toggle Login</button>
    );
}
 
export default Button;
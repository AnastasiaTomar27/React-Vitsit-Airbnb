import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './ex1/Section.jsx'
import Section2 from './ex2/Section2.jsx'
import Section3 from './ex3/Section3.jsx'
import Profile from './ex4/Profile.jsx'
import Kappale from './ex5/Kappale.jsx'

const kasittelePainallus = () => {
    console.log("Boo! From main.jsx!!!");
}

const sanoBoo = () => {
    console.log("Boo from main.jsx");
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*ex 1*/}
        {<Section /> }

        {/* ex 2 */}
        {/* <Section2 /> */}

        {/* ex 3 */}
        {/* <Section3 kasittelePainallus={kasittelePainallus} /> */}

        {/* ex 4 */}
        {/* <Profile
        profiiliTeksti={"Profiili"}
        korttiTeksti={"Kortti"}
        painikeTeksti={"Paina"}
        kasittelePainallus={sanoBoo}
        /> */}

        {/* ex5 */}
        {/* <Kappale teksti="Hello, hello, mitä kello">
            <h1>Terveisiä main.jsx:stä</h1>
        </Kappale>  */}
    </React.StrictMode>
)

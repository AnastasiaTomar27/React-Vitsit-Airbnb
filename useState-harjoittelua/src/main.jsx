import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Tekstiruutu from './ex1/Tekstiruutu.jsx'
import Lomake from './ex2/Lomake.jsx'
import Profile from './ex3/Profile.jsx'
import Counter2 from './ex4/Counter2.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ex 1 */ }
    {/* <Tekstiruutu /> */}

    {/* ex 2  */}
    {/* <Lomake /> */}

    {/* ex 3 */}
    <Profile />

    {/* ex 4 */}
    {/* {<Counter2 />} */}

  </React.StrictMode>,
)

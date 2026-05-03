import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Page1Home from './Components/page1Home/Page1Home.jsx'
import Page2About from './Components/Page2About/Page2About.jsx'
import Page3Services from './Components/Page3Services/Page3Services.jsx'
import Page4Projects from './Components/Page4Projects/Page4Projects.jsx'
import Page5Contact from './Components/Page5Contact/Page5Contact.jsx'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className=""  >
        <Navbar />
        <Page1Home/>
        <Page2About/>
        <Page3Services/>
        <Page4Projects/>
        <Page5Contact/>
    </div>
  )
}

export default App

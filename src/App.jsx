import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Page1Home from './Components/page1Home/Page1Home.jsx'
import Page2About from './Components/Page2About/Page2About.jsx'
import Page3Services from './Components/Page3Services/Page3Services.jsx'
import Page4Projects from './Components/Page4Projects/Page4Projects.jsx'
import Page5Contact from './Components/Page5Contact/Page5Contact.jsx'
import 'remixicon/fonts/remixicon.css'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=""  >
        <Navbar />
     <Routes>
      <Route path='/' element={<Page1Home/>}/>
      <Route path='/About' element={<Page2About/>}/>
      <Route path='/Services' element={<Page3Services/>}/>
      <Route path='/Projects' element={<Page4Projects/>}/>
      <Route path='/Contact' element={<Page5Contact/>}/>
     </Routes>
    </div>
  )
}

export default App

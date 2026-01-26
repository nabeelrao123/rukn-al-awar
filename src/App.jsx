import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './Layout'
import Container from './components/Container'
import { menuItems } from './data'
import News from './components/News'
import Newfile from './components/Newfile'
import Singlepage from './components/Singlepage'
import Singlepagetoggle from './components/Singlepagetoggle'
import Weblogotakaful from './components/Weblogotakaful'

function App() {
  return (
    <div>
      {/* <Navbar menuItems={menuItems} />
      <div className="bg-accent" >
        <Container>
          <Layout/>
        </Container>
      </div> */}

      {/* <News/> */}
      {/* <Newfile/> */}
{/* <Singlepage/>       */}
{/* <Singlepagetoggle/> */}
<Weblogotakaful/>


    </div>
  )
}

export default App

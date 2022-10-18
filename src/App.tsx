
import {Routes,Route} from "react-router-dom"
import {Home} from"../src/pages/Home"
import {Headernav} from "../src/Component/Header"
import { About } from './pages/About'
import { Service } from './pages/Service'
import { Team } from './pages/Team'
import { Contact } from './pages/Contact'
import {Footer} from"../src/Component/Footer"
function App() {
  

  return (
    <div className="App"  style={{backgroundColor:"#F0F0F0" }}>  
  
    <Headernav/>
         <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Home/>}/>
      <Route path="/service" element={<Home/>}/>
      <Route path="/team" element={<Home/>}/>
      <Route path="/contact" element={<Home/>}/>
    </Routes>
    
    <Footer/>    
    </div>   
  )
}

export default App

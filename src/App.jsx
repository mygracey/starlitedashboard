import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Errorpage from "./Components/Errorpage/Errorpage"
import Dashboard from "./Components/Dashboard/Dashboard"
import Footer from "./Components/Footer/Footer"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App(){
  return(
    <section className="app">
      <Router>

         <Routes>
           <Route path="/" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="*" element={<Errorpage/>} />
                                
        </Routes>
        <Footer/>
      </Router>
     
    </section>
  )
}

export default App
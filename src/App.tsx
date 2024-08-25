import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Ispitnirokovi from './components/Ispitnirokovi'
import Kontakt from './components/Kontakt'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Nedeljniplan from './components/Nedeljniplan'
import Pocetna from './components/Pocetna'
import Predmet from './components/Predmet'
import SignUp from './components/Signup'
import Task from './components/Task'


function App() {

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pocetna" element={<Pocetna />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/planovi" element={<Nedeljniplan />} />
          <Route path="/rokovi" element={<Ispitnirokovi />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App

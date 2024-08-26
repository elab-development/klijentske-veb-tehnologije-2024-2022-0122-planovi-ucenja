import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Ispitnirokovi from './components/Ispitnirokovi'
import Kontakt from './components/Kontakt'
import Login from './components/Login'
import Nedeljniplan from './components/Nedeljniplan'
import Pocetna from './components/Pocetna'
import SignUp from './components/Signup'
import Profile from './components/Profile'
import Predmeti from './components/Predmeti'


function App() {

  return (
<>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pocetna" element={<Pocetna />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/planovi" element={<Nedeljniplan />} />
          <Route path="/rokovi" element={<Ispitnirokovi />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/predmeti" element={<Predmeti />} />
        </Routes>
      </div>
    </Router>
</>
  )
}

export default App

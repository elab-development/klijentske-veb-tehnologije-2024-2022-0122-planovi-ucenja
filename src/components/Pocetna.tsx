import Navbar from './Navbar'
import './Pocetna.css'
import Task from './Task'

const Pocetna = () => {
  return (
    <>
        <Navbar/>
        <div className='Pocetna-container'>
            <h1>DANASNJE OBAVEZE</h1>
            <div className='Pocetna-paragrafi'>
                <p>TASK</p>
                <p>PREDMET</p>
                <p>KOMENTAR</p>
            </div>
            <div className='Pocetna-taskovi'>
                <Task/>
                <Task/>
                <Task/>
            <div className="button_plus"></div>
            </div>
        </div>
    </>
  )
}

export default Pocetna
import { Outlet, Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <><div className="navbar-wrapper">
            <div className='navBar'>
                <Link to='/'><img src='../../calendar.png' className="calendar-icon" alt='Calendar' /></Link>
                <Link to='/'>POCETNA</Link>
                <Link to='pocetna'>PLANOVI</Link>
                <Link to='ispitni-rokovi'>ISPITNI ROKOVI</Link>
                <Link to='predmeti'>PREDMETI</Link>
            </div>
        </div>
        
        <Outlet/>
        </>
    )
}

export default NavBar
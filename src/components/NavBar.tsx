import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <div className='Navbar_ikonica'>
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="51" height="51" fill="url(#pattern0_80_60)"/>
                <defs>
                <pattern id="pattern0_80_60" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_80_60" transform="scale(0.015625)"/>
                </pattern>
                <image id="image0_80_60" width="64" height="64" href="data:image/png;base64,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"/>
                </defs>
            </svg>
        </div>
        <div>
            <ul className='NavbarUl'>
              <li><a href="">POCETNA</a></li>
              <li><a href="">PLANOVI</a></li>
              <li><a href="">ISPITNI ROKOVI</a></li>
              <li><a href="">PREDMETI</a></li>
              <li><a href="">KONTAKT</a></li>
              <li><a href="">PROFIL</a></li>
              <li><a href="">ODJAVA</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Kontakt.css';

const Kontakt: React.FC = () => {
  return (
    <div className="contact-container">
        <h1>KONTAKTIRAJTE NAS</h1>
        <hr/>
        <div className='contact-container2'>
        <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} className='contact-ikonice'/> example@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className='contact-ikonice'/> +381 555-333
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='contact-ikonice'/> Denver Nuggets Ball Arena
        </p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Vase Ime" className="form-input" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Vas broj telefona" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Unesite Vasu poruku ovde" className="form-input form-textarea" />
          </div>
          <button type="submit" className="form-button">
            Pošalji
          </button>
        </form>
      </div>
        </div>
      
    </div>
  );
};

export default Kontakt;
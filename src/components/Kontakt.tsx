import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Kontakt.css';
import Navbar from './Navbar';

const Kontakt: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.alert('Vaša poruka je poslata!');

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Navbar/>
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
            <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <input type="text" placeholder="Vase Ime" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Vas broj telefona" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Unesite Vasu poruku ovde" className="form-input form-textarea" required />
              </div>
              <button type="submit" className="form-button">
                Pošalji
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
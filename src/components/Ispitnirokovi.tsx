import React from 'react';
import './Ispitnirokovi.css';

const Ispitnirokovi: React.FC = () => {
    return (
        <div className="schedule-container">
            <div className="schedule">
                <h1>RASPORED ISPITA</h1>
                <hr className='hr1'/>
                <div className="schedule-grid">
                    <div className="row">
                        <div className="header"></div>
                        {Array.from({ length: 11 }, (_, i) => (
                            <div key={i} className="header">PREDMET {i + 1}</div>
                        ))}
                    </div>
                    {['JAN', 'FEB', 'JUN', 'JUL', 'SEPT', 'OKT'].map((month, i) => (
                        <div key={i} className="row">
                            <div className="header">{month}</div>
                            {Array.from({ length: 11 }, (_, j) => (
                                <div key={j} className="cell">{j+2}.{i+1}.2024.</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="schedule">
                <h1>RASPORED KOLOKVIJUMA</h1>
                <hr className=' hr1 hr2'/>
                <div className="schedule-grid">
                    <div className="row">
                        <div className="header"></div>
                        {Array.from({ length: 11 }, (_, i) => (
                            <div key={i} className="header">PREDMET {i + 1}</div>
                        ))}
                    </div>
                    {['PRVI ZIMSKI', 'DRUGI ZIMSKI', 'PRVI LETNJI', 'DRUGI LETNJI'].map((period, i) => (
                        <div key={i} className="row">
                            <div className="header">{period}</div>
                            {Array.from({ length: 11 }, (_, j) => (
                                <div key={j} className="cell">{j+1}.{j+2}.2024.</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ispitnirokovi;

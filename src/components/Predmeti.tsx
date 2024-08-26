import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Predmeti.css';
import { Predmet } from '../models/Predmet';
import { User } from '../models/User';
import PredmetK from './PredmetK';
import { PolozeniPredmet } from '../models/PolozeniPredmet';

const Predmeti: React.FC = () => {
    const [newPredmet, setNewPredmet] = useState<Predmet>({ ime: '', brojESBP: 0 });
    const [predmeti, setPredmeti] = useState<Predmet[]>([]);
    const [polozeniPredmeti, setPolozeniPredmeti] = useState<PolozeniPredmet[]>([]);

    const [user] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const handleAddPredmet = () => {
        if (newPredmet.ime.trim() && newPredmet.brojESBP > 0) {
            const storedPredmeti = localStorage.getItem(`${user?.username}_predmeti`);
            const predmeti: Predmet[] = storedPredmeti ? JSON.parse(storedPredmeti) : [];
            predmeti.push(newPredmet);
            localStorage.setItem(`${user?.username}_predmeti`, JSON.stringify(predmeti));

            setNewPredmet({ ime: '', brojESBP: 0 });
            setPredmeti(predmeti); 
        }
    };

    const handleMarkAsPolozen = (predmet: Predmet) => {
        const updatedPredmeti = predmeti.filter((p) => p !== predmet);
        setPredmeti(updatedPredmeti);
        localStorage.setItem(`${user?.username}_predmeti`, JSON.stringify(updatedPredmeti));

        // const updatedPolozeniPredmeti = [...polozeniPredmeti, predmet];
        // setPolozeniPredmeti(updatedPolozeniPredmeti);
        // localStorage.setItem(`${user?.username}_polozenipredmeti`, JSON.stringify(updatedPolozeniPredmeti));



        const newPolozeniPredmet = new PolozeniPredmet(predmet.ime,predmet.brojESBP, true);
        const updatedPolozeniPredmeti = [...polozeniPredmeti, newPolozeniPredmet];
        setPolozeniPredmeti(updatedPolozeniPredmeti);
        localStorage.setItem(`${user?.username}_polozenipredmeti`, JSON.stringify(updatedPolozeniPredmeti));
    };

    useEffect(() => {
        if (user) {
            const storedPredmeti = localStorage.getItem(`${user.username}_predmeti`);
            const storedPolozeniPredmeti = localStorage.getItem(`${user.username}_polozenipredmeti`);

            if (storedPredmeti) {
                setPredmeti(JSON.parse(storedPredmeti));
            }

            if (storedPolozeniPredmeti) {
                setPolozeniPredmeti(JSON.parse(storedPolozeniPredmeti));
            }
        }
    }, [user]);

    return (
        <>
            <Navbar />
            <div className="Predmeti-container">
                <h1>PREDMETI</h1>
                <hr />
                <div className="lista-polozeni-container">
                    <div className="divZaPolja">
                        <h2>LISTA PREDMETA</h2>
                        <div>
                            {predmeti.map((predmet, index) => (
                                <div className='divPredmetSaDugmetom' key={index}>
                                    <PredmetK ime={predmet.ime} brojESBP={predmet.brojESBP} polozen={false}/>
                                    <button onClick={() => handleMarkAsPolozen(predmet)}>
                                        Oznaci kao polozen
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="divZaPolja">
                        <h2>POLOŽENI PREDMETI</h2>
                        <div>
                            {polozeniPredmeti.map((predmet, index) => (
                                <PredmetK ime={predmet.ime} brojESBP={predmet.brojESBP} polozen={true}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="divZaInput">
                    <input
                        type="text"
                        value={newPredmet.ime}
                        onChange={(e) => setNewPredmet({ ...newPredmet, ime: e.target.value })}
                        required
                        placeholder="Unesite predmet"
                    />
                    <input
                        type="number"
                        value={newPredmet.brojESBP}
                        onChange={(e) => setNewPredmet({ ...newPredmet, brojESBP: parseInt(e.target.value) })}
                        required
                        placeholder="Unesite broj ESBP"
                    />
                </div>
                <button className="DodajPredmet" onClick={handleAddPredmet}>Dodaj predmet</button>
            </div>
        </>
    );
};

export default Predmeti;
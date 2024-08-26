import React, { useState,useEffect } from 'react';
import './Nedeljniplan.css';
import Navbar from './Navbar';
import { User } from '../models/User';

type Day = 'Ponedeljak' | 'Utorak' | 'Sreda' | 'Cetvrtak' | 'Petak' | 'Subota' | 'Nedelja';

const Nedeljniplan: React.FC = () => {
  const [user] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [tasks, setTasks] = useState<Record<Day, string[]>>({
    Ponedeljak: [],
    Utorak: [],
    Sreda: [],
    Cetvrtak: [],
    Petak: [],
    Subota: [],
    Nedelja: []
  });
  const storedRaspored = localStorage.getItem(`${user?.username}_raspored`);
  let NedeljniRaspored: Record<Day, string[]> = storedRaspored ? JSON.parse(storedRaspored) : { 
    Ponedeljak: [],
    Utorak: [],
    Sreda: [],
    Cetvrtak: [],
    Petak: [],
    Subota: [],
    Nedelja: []
  };
  const addPlan = (day: Day) => {
    const task = prompt('Enter a new task:');

    if (task) {
      NedeljniRaspored[day].push(task);
      localStorage.setItem(`${user?.username}_raspored`, JSON.stringify(NedeljniRaspored));
      setTasks(NedeljniRaspored);
    }
  };

  useEffect(() => {
    if (user) {
        const storedRaspored = localStorage.getItem(`${user.username}_raspored`);
        if (storedRaspored) {
            setTasks(JSON.parse(storedRaspored));
        }
    }
}, [user]);


  return (
    <>
    <Navbar/>
    <div className="weekly-plan">
      <h1>NEDELJNI PLAN</h1>
      <hr />
      <div className="week">
        {Object.keys(tasks).map((day) => (
            <div key={day} className="day">
            <h2>{day}</h2>
            <div className="tasks">
              {tasks[day as Day].map((task, i) => (
                  <div key={i} className={`task`}>
                  {task}
                </div>
              ))}
            </div>
            <div className="button_plusNp" onClick={() => addPlan(day as Day)}></div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default Nedeljniplan;
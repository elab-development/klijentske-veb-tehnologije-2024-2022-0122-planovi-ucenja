import React, { useState } from 'react';
import './Nedeljniplan.css';
import Navbar from './Navbar';

type Day = 'Ponedeljak' | 'Utorak' | 'Sreda' | 'Cetvrtak' | 'Petak' | 'Subota' | 'Nedelja';

const Nedeljniplan: React.FC = () => {
  const [tasks, setTasks] = useState<Record<Day, string[]>>({
    Ponedeljak: [],
    Utorak: [],
    Sreda: [],
    Cetvrtak: [],
    Petak: [],
    Subota: [],
    Nedelja: []
  });

  const addTask = (day: Day) => {
    const task = prompt('Enter a new task:');
    if (task) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [day]: [...prevTasks[day], task],
      }));
    }
  };

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
            <div className="button_plus" onClick={() => addTask(day as Day)}></div>
            {/* <button className="add-task" onClick={() => addTask(day as Day)}>+</button> */}
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default Nedeljniplan;
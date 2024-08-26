import React, { useState } from 'react';
import { Task as TaskType } from '../models/Task';
import './Zadatak.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface TaskProps {
    task: TaskType;
}

const Zadatak: React.FC<TaskProps> = ({ task }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`Task-container ${isChecked ? 'checked' : ''}`}>
            <p>{task.ime}</p>
            <p>{task.predmet}</p>
            <p>{task.komentar}</p>
            <div className='cekiranjeDiv' onClick={handleCheck}>
                {isChecked && <FontAwesomeIcon icon={faCheck} className='check-icon' />}
            </div>
        </div>
    );
};

export default Zadatak;

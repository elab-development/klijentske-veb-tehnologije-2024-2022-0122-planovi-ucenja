import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Pocetna.css';
import Zadatak from './Zadatak'; 
import { Task } from '../models/Task'; 
import { User } from '../models/User';

const Pocetna: React.FC = () => {
    const [newTask, setNewTask] = useState<Task>({ ime: '', predmet: '', komentar: '' });
    const [isFormVisible, setFormVisible] = useState<boolean>(false); 
    const [currentPage, setCurrentPage] = useState<number>(1);
    const tasksPerPage = 5;

    const handleAddTask = () => {
        if (newTask.ime.trim() && newTask.predmet.trim() && newTask.komentar.trim()) {
            const storedTasks = localStorage.getItem(`${user?.username}_tasks`);
            let tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];
            tasks.push(newTask);
            localStorage.setItem(`${user?.username}_tasks`, JSON.stringify(tasks));

            setNewTask({ ime: '', predmet: '', komentar: '' });
            setFormVisible(false);
        }
    };
    
    const [user] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (user) {
            const storedTasks = localStorage.getItem(`${user.username}_tasks`);
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        }
    }, [user, newTask]);

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
    const totalPages = Math.ceil(tasks.length / tasksPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <Navbar />
            <div className='Pocetna-container'>
                <h1>DANASNJE OBAVEZE</h1>
                <div className='Pocetna-paragrafi'>
                    <p>TASK</p>
                    <p>PREDMET</p>
                    <p>KOMENTAR</p>
                </div>
                <div className='Pocetna-taskovi'>
                    {currentTasks.map((task, index) => (
                        <Zadatak key={index} task={task} />
                    ))} 
                    <div className="button_plus" onClick={() => setFormVisible(true)}></div>
                    {isFormVisible && (
                        <div className='Pocetna-task-form'>
                            <input
                                type="text"
                                value={newTask.ime}
                                onChange={(e) => setNewTask({ ...newTask, ime: e.target.value })}
                                placeholder="Unesite task"
                            />
                            <input
                                type="text"
                                value={newTask.predmet}
                                onChange={(e) => setNewTask({ ...newTask, predmet: e.target.value })}
                                placeholder="Unesite predmet"
                            />
                            <input
                                type="text"
                                value={newTask.komentar}
                                onChange={(e) => setNewTask({ ...newTask, komentar: e.target.value })}
                                placeholder="Unesite komentar"
                            />
                            <button className='addTaskB' onClick={handleAddTask}>Dodaj Task</button>
                            <button className='cancelB' onClick={() => setFormVisible(false)}>Cancel</button>
                        </div>
                    )}
                </div>
                <div className="pagination">
                    <button className='paginacijaB' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                    <span className='spanP'>Strana {currentPage} of {totalPages}</span>
                    <button className='paginacijaB' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
        </>
    );
};

export default Pocetna;
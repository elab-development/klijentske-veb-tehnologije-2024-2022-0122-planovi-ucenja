import Task from './Task';

class User {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    taskovi: Task[];

    constructor(
        firstName: string, 
        lastName: string, 
        username: string, 
        email: string, 
        password: string,
        taskovi: Task[]
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.taskovi = taskovi;
    }

    validatePassword(retypePassword: string): boolean {
        return this.password === retypePassword;
    }

    addTask(task: Task): void {
        this.taskovi.push(task);
    }
}

export default User;
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { type User } from '../user/user.model';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent,NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required:true}) TCuser!: User;
    isAddingTask = false;

    constructor(private tasksService: TasksService) {   // dependency injection
    }

    get selectedUserTasks(){
        return this.tasksService.getUserTasks(this.TCuser.id);
    }


    onStartAddTask(){
        this.isAddingTask = true;
    }

    onCloseAddTask(){
        this.isAddingTask = false;
    }

}

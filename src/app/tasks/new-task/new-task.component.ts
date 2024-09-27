import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { User } from '../../user/user.model';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})


export class NewTaskComponent {
    @Input({ required: true }) user!: User;
    @Output() close = new EventEmitter<void>();
    enteredTitle: string = 'Title';
    enteredSummary: string = 'Summary';
    enteredDueDate: string = 'Due Date';
    private tasksService = inject(TasksService);        // dependency injection, andere manier


    onSubmit() {
        this.tasksService.addTask({
            title: this.enteredTitle
            , summary: this.enteredSummary
            , dueDate: this.enteredDueDate
        }, this.user.id
        );
        this.close.emit();
    }

    onCancel() {
        this.close.emit();
    }


}

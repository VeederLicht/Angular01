import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.module';

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})


export class NewTaskComponent {
    @Output() cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter<NewTaskData>();
    enteredTitle: string = 'Title';
    enteredSummary: string = 'Summary';
    enteredDueDate: string = 'Due Date';

    onSubmit() {
        console.log('Submitted');
        this.add.emit({ title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate });
    }

    onCancel() {
        this.cancel.emit();
    }


}

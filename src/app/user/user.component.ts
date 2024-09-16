import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})

export class UserComponent {
    // old 'decorator' way of doing it
    @Input({required: true}) avatar!: string;   // uitroepteken om TypeScript te laten weten dat deze variabele een waarde gaat krijgen
    @Input({required: true}) name!: string;
    @Input({required: true}) id!: string;

    @Output() select = new EventEmitter<string>();

    // signal way of doing it
    // avatar = input.required<string>();  // required, dus placeholder is onzin
    // name = input<string>('placeholder');    // placeholder, maar geen garantie dat ergens een waarde wordt toegekend


    get imagePath() { // belangrijk om 'get' ervoor te zetten
        return 'assets/user-images/' + this.avatar;
    }

    onSelectUser() {
        this.select.emit(this.id);
    }
}

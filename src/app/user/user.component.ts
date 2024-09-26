import { Component,Input,Output,EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})

export class UserComponent {
    // old 'decorator' way of doing it
    // @Input({required: true}) avatar!: string;   // uitroepteken om TypeScript te laten weten dat deze variabele een waarde gaat krijgen
    // @Input({required: true}) name!: string;
    // @Input({required: true}) id!: string;
    @Input({required: true}) user!: User; // inline objects definieren als Type (2.39)
    @Input({required: true}) isSelected!: boolean;  // dynamic css (2.48)
    @Output() select = new EventEmitter<string>();

    // signal way of doing it
    // avatar = input.required<string>();  // required, dus placeholder is onzin
    // name = input<string>('placeholder');    // placeholder, maar geen garantie dat ergens een waarde wordt toegekend


    get imagePath() { // belangrijk om 'get' ervoor te zetten
        return 'assets/user-images/' + this.user.avatar;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }
}

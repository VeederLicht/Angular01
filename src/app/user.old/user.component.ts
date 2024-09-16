import { Component, signal,computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // run only once when js file is parsed

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})

export class UserComponent {
    // zone.js way of doing it
    // selectedUser : any = DUMMY_USERS[randomIndex];
    // signal way of doing it
    selectedUser = signal(DUMMY_USERS[randomIndex]);

    // zone.js way of doing it
    // get imagePath() {    // 'property binding'
    //     return 'assets/user-images/' + this.selectedUser().avatar
    // }
    imagePath = computed(() => {    // signal way of doing it
        return 'assets/user-images/' + this.selectedUser().avatar
    });


    onSelectUser() {
        randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        // this.selectedUser = DUMMY_USERS[randomIndex];  // zone.js way of doing it
        this.selectedUser.set(DUMMY_USERS[randomIndex]);   // signal way of doing it
    }
}

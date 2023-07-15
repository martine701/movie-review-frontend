import { Injectable } from "@angular/core";
import User from 'src/app/interfaces/users';
import { Subject } from "rxjs";

@Injectable()
export class LoginService{
    user: User = { name: '', id: '' };
    userChange: Subject<User> = new Subject<User>();

    constructor() {
        this.userChange.subscribe((value) => { this.user = value; });
    }

    login(name = '', id = '') {
        this.userChange.next({ name: name, id: id });
    }

    logout() {
        this.userChange.next({ name: '', id: '' });
    }
}
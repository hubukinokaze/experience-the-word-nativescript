import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public hello;
    public users;
    public shoesList: string[] = [];
    public listLoaded = false;
    constructor(private _userService: UserService) {}

    ngOnInit() {
        this.getAllUsers();
    }

    clearInput() {
        this.shoesList = [];
    }

    getAllUsers() {
        const mockdata = [
            {
                id: 1,
                username: 'HowtoLeave',
                firstName: 'John',
                lastName: 'Doe'
            },
            {
                id: 2,
                username: 'HowtoEscape',
                firstName: 'Adam',
                lastName: 'Smith'
            },
            {
                id: 3,
                username: 'HowtoRunAway',
                firstName: 'Frontend',
                lastName: 'Master'
            }
        ];

        this._userService.getAllUsers().subscribe(
            data => { this.users = data; this.listLoaded = true; },
                err => { this.users = mockdata },
            () => console.log('successfully loaded users')
        );
    }
}

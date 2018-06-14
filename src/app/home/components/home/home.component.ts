import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'app/services/user.service';
import 'rxjs/add/operator/map';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'seed-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public translate;
    public hello;
    public users;
    public shoesList: string[] = [];

    constructor(private _userService: UserService, translate: TranslateService) {
        this.translate = translate;
        this.translate.setTranslation('en', require('assets/i18n/en.json'));
        this.translate.setDefaultLang('en');
        this.translate.use('en');

    }

    ngOnInit() {
        this.getAllUsers();
    }

    clearInput() {
        this.shoesList = [];
    }

    useLanguage(language: string) {
        this.translate.use(language);
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
            data => { this.users = data },
                err => { this.users = mockdata },
            () => console.log('successfully loaded users')
        );
    }
}

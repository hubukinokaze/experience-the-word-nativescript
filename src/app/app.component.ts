import { Component } from '@angular/core';
// vendor dependencies
// app
import { MenuItem } from './menu/menu.common';

@Component({
    moduleId: module.id,
    selector: 'etw-app',
    templateUrl: './app.component.html',
})
export class AppComponent {


    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.chapter',
            link: ['/chapter']
        },
        {
            title: 'menu.about',
            link: ['/about']
        },
        {
            title: 'menu.admin',
            link: ['/admin']
        }
    ];

    constructor() {

    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    text: string;

    constructor() {
        this.text = 'Write something';
    }

    ngOnInit() {
    }

}

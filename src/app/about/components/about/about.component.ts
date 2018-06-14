import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    text: string;

    constructor() {
        this.text = 'Write something';
    }

    ngOnInit() {
    }

}

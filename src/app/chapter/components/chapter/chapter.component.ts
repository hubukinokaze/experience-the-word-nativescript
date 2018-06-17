import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-chapter',
    templateUrl: './chapter.component.html',
    styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
    text: string;

    constructor() {
        this.text = 'Write something';
    }

    ngOnInit() {
    }

}

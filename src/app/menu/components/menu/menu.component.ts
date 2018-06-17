import { Component, Inject, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
// app
import { MenuItem } from '../../interfaces/MenuItem';
declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'seed-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    public translate: TranslateService;
    public languages: object = [];
    @Input() items: MenuItem[];

    constructor(translate: TranslateService, public dialog: MatDialog) {
        this.translate = translate;
        this.translate.setTranslation('en', require('assets/i18n/en.json'));
        this.translate.setDefaultLang('en');
        this.translate.use('en');

        this.languages = [
            {
                name: 'EN',
                value: 'en'
            },
            {
                name: 'JP',
                value: 'jp'
            }
        ];
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

    openSignInDialog(): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;

        this.dialog.open(CourseDialogComponent, dialogConfig);
    }

}

@Component({
    moduleId: module.id,
    selector: 'seed-signin-dialog',
    template: '<h1 mat-dialog-title>Add file</h1>' +
    '<mat-dialog-content> Content goes here</mat-dialog-content>' +
    '<mat-dialog-actions><button mat-button-raised>Add</button><button mat-button-raised>Cancel</button></mat-dialog-actions>',
    styleUrls: ['./menu.component.scss']
})
export class CourseDialogComponent {
    description: string;

    constructor(private dialogRef: MatDialogRef<CourseDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
        this.description = 'stuff';
    }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}

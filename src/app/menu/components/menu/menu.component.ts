import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

    constructor(translate: TranslateService) {
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
        console.log(language);
        this.translate.use(language);
    }

}

import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
// app
import { MenuItem } from './menu/menu.common';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'maestro-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public translate;

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.about',
            link: ['/about']
        }
    ];

    constructor(translate: TranslateService) {
        this.translate = translate;
        this.translate.setTranslation('en', require('../assets/i18n/en.json'));
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }
}

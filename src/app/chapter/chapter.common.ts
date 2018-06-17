// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { AdminRoutes } from './chapter.routes';
import { ChapterComponent } from './components/chapter/chapter.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>AdminRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    ChapterComponent
];

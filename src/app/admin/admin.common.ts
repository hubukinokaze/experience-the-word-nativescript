// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './components/admin/admin.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>AdminRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    AdminComponent
];

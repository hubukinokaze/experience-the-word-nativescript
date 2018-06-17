import { CommonModule } from '@angular/common';
// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { MenuComponent, CourseDialogComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SharedModule } from '../shared';

export const SHARED_MODULES: any = [
    CommonModule,
    TranslateModule,
    SharedModule
];

export const COMPONENT_DECLARATIONS: any[] = [
    MenuComponent,
    MenuItemComponent,
    CourseDialogComponent
];

export const COMPONENT_EXPORTS: any[] = [
    MenuComponent,
    CourseDialogComponent
];

export const SHARED_ENTRY: any[] = [
    CourseDialogComponent
];

export * from './interfaces/MenuItem';

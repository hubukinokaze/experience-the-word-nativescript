import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './admin.common';

@NgModule({
    imports: [
        ...SHARED_MODULES,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
})
export class AdminModule { }

// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import { AppRoutes } from './app.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes, { useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


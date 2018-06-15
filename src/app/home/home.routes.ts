import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'chapter',
        loadChildren: 'app/chapter/chapter.module#ChapterModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    }
];

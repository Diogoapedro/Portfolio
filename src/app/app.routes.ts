import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ConnectComponent } from './components/connect/connect.component';

export const routes: Routes = [  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'connect', component: ConnectComponent }, 
];

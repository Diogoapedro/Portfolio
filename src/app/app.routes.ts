import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    //{ path: 'team', component: TeamPageComponent },
    //{ path: 'membership', component: MembershipPageComponent },
    //{ path: 'contact-us', component:  ContactUsPageComponent},
    //{ path: 'documents', component: DocumentsPageComponent }, 
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'accueil', component: HomeComponent},
    {path: 'toto.html', component: HomeComponent} ,   
    {path: 'about.html', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about/:toto', component: AboutComponent},
    {path: 'consultAct', component:ConsultActiviteComponent },
    {path: 'consultAct/:bonjour/:salut', component:ConsultActiviteComponent },
    {path: 'consultAct/:bonjour', component:ConsultActiviteComponent }



];

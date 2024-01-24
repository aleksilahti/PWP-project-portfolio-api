import { Routes } from '@angular/router';
import { PortfolioProjectListComponent } from './portfolio-project-list/portfolio-project-list.component';

export const routes: Routes = [
    {path: '', component: PortfolioProjectListComponent},
    {path: 'portfolio', component: PortfolioProjectListComponent},
    {path: 'favorites', component: PortfolioProjectListComponent},
    {path: 'contact', component: PortfolioProjectListComponent}

];

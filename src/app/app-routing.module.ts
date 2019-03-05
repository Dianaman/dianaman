import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesPath } from './share/constants';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: RoutesPath.CONTACT,
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: RoutesPath.PORTFOLIO,
    loadChildren: './modules/portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: RoutesPath.RESUME,
    loadChildren: './modules/resume/resume.module#ResumeModule'
  },
  {
    path: '',
    component: NavComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

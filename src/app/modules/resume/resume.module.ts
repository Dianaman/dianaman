import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';


const ROUTES: Routes = [
  {
    path: '',
    component: ResumeComponent
  }
]

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    AngularSvgIconModule
  ],
  bootstrap: [
    ResumeComponent
  ]
})
export class ResumeModule { }

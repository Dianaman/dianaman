import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';


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
    RouterModule.forChild(ROUTES)
  ],
  bootstrap: [
    ResumeComponent
  ]
})
export class ResumeModule { }

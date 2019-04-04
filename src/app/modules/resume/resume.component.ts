import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public downloadResume() {
    saveAs("../assets/files/resume_diana_man.pdf", "resume_diana_man.pdf");
  }

}

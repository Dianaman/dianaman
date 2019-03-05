import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../share/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public Routes = RoutesPath;
  
  constructor() { }

  ngOnInit() {
  }

}

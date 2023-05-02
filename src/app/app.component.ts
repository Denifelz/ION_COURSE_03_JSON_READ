import { Component } from '@angular/core';

import * as jsonData from '../data/students.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonData: any;

  constructor() {
    this.jsonData = jsonData;
  }
}

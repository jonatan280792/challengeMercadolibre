import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  public filterSearch: string;

  constructor() { }

  ngOnInit() {
  }

}

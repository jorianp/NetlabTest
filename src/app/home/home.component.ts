import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = JSON.parse(localStorage.getItem('data'));

  constructor() { }

  ngOnInit() {
    // localStorage.clear();
  }

}

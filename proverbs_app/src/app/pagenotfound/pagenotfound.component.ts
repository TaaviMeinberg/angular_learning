import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css', '../app.component.css']
})
export class PagenotfoundComponent implements OnInit {
  title = '404';
  explenation ='Lehte ei leitud';

  constructor() { }

  ngOnInit(): void {
  }

}

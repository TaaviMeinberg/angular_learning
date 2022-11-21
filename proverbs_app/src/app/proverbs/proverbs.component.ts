import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.css', '../app.component.css']
})
export class ProverbsComponent implements OnInit {
  title = 'Vanasõnad';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proverb-card',
  templateUrl: './proverb-card.component.html',
  styleUrls: ['./proverb-card.component.css']
})
export class ProverbCardComponent implements OnInit {

  proverbNumber = 0;
  proverbText = 'Vanasõna ei õnnestunud laadida :(';
  
  constructor() { 

  }

  ngOnInit(): void {

    
    
  }

}

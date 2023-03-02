import { Component, OnInit, Input } from '@angular/core';
import proverbData from '../../assets/proverbs.json';

@Component({
  selector: 'app-proverb-card',
  templateUrl: './proverb-card.component.html',
  styleUrls: ['./proverb-card.component.css']
})
export class ProverbCardComponent implements OnInit {

  @Input() proverbNumber =0;
  @Input() proverbText = 'Seda ei tohiks näha olla - kui on, siis läks miskit nihu :(';

  constructor() {

  }

  ngOnInit(): void {
  }
  
}

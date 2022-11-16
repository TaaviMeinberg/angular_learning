import { Component, OnInit } from '@angular/core';
import proverbData from '../../assets/proverbs.json';

@Component({
  selector: 'app-proverb-card',
  templateUrl: './proverb-card.component.html',
  styleUrls: ['./proverb-card.component.css']
})
export class ProverbCardComponent implements OnInit {

  //Accessing json values:
  //proverbText = proverbData['a'][21];
  proverbNumber =0;
  proverbText = 'Seda ei tohiks näha olla - kui on, siis läks miskit nihu :(';

  constructor() {

  }

  ngOnInit(): void {
    this.generateRandomProverb();
  }

  generateRandomProverb(){
    let proverbObjects = Object.values(proverbData);
    let randomProverbObjectIndex = Math.floor(Math.random()*proverbObjects.length);
    let randomProverbObject = proverbObjects[randomProverbObjectIndex];

    let allProverbs = Object.values(randomProverbObject);
    let randomProverbValueIndex = Math.floor(Math.random()*allProverbs.length);
    let randomProverb = allProverbs[randomProverbValueIndex]
    
    
    this.proverbNumber=randomProverbValueIndex;
    this.proverbText=randomProverb;
  }
  
}

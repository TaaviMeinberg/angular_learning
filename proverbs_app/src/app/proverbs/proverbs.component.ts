import { Component, OnInit } from '@angular/core';

// importing json containing all proverbs from wikiquote
import proverbData from '../../assets/proverbs.json';

@Component({
  selector: 'app-proverbs',
  templateUrl: './proverbs.component.html',
  styleUrls: ['./proverbs.component.css', '../app.component.css']
})
export class ProverbsComponent implements OnInit {

  // initializing variables
  title = 'Vanasõnad';
  proverbNumber = 0;
  proverbText = '';

  constructor() { }

  // generate a random proverb on page load
  ngOnInit(): void {
    this.generateRandomProverb();
  }

  // called when new proverb button is clicked
  newProverb() {
    this.generateRandomProverb();
  }

  generateRandomProverb() {

    // selects random key of all available keys, for example key 'a'
    let proverbObjects = Object.values(proverbData);
    let randomProverbObjectIndex = Math.floor(Math.random() * proverbObjects.length);
    let randomProverbObject = proverbObjects[randomProverbObjectIndex];

    // array of all values from chosen key
    let allProverbs = Object.values(randomProverbObject);

    // randomly selects one value and it's index number from array of all values of a specific key
    let randomProverbValueIndex = Math.floor(Math.random() * allProverbs.length);
    let randomProverb = allProverbs[randomProverbValueIndex]

    // array index number of of the chosen value in
    this.proverbNumber = randomProverbValueIndex;

    // value itself
    this.proverbText = randomProverb;
  }

}

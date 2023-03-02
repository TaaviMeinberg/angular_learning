import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
clickHandler: any;

  @Input() 
  set text(name: string){
    this.buttonText = name.toUpperCase();
  }

  get name(): string {
    return this.buttonText;
  }

  @Output() btnClick = new EventEmitter();
  constructor() { }

  public buttonText ="";
  ngOnInit(): void {
  }

}

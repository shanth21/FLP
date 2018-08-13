import { OnInit } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})


export class ButtonsComponent implements OnInit {
  current: any;

  constructor(){
    this.current='0';
  }

  @Output()
  myEvent = new EventEmitter();

  pushValue(value)
  {
    this.current=value;
    this.myEvent.emit(this.current);
    
  }
  ngOnInit() {
  }

}

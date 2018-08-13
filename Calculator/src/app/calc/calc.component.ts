import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {
  current:any;
    constructor(){

    this.current='';
   
   }

   @Output() myNewEvent = new EventEmitter();
   
  calculate(value){
    
    if(value == 'C'){
      this.current='0';
    }
    else if(value == '='){
      this.current = eval(this.current);
    }
    else{
      if(this.current=='0'){
        this.current=value;
      }
      else{
      this.current=this.current+value;
    }
    }
    
    this.myNewEvent.emit(this.current);
    
  }
  ngOnInit() {
  }

}

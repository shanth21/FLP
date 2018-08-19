import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormModel2 } from '../app.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})

export class Form2Component implements OnInit {

  @Input() data2: FormModel2;
  @Output() data2Change = new EventEmitter();
  form2;

  @Output() screenChange = new EventEmitter<boolean>();
  screen: boolean = false;
  
  branches = [
    {value: 'Computer Science'},
    {value: 'Information Science'},
    {value: 'Mechanical'}
  ];

  constructor( private fb2: FormBuilder ) {}

  ngOnInit() { 
    this.initForm2();
  }

  initForm2(){
    this.form2 = this.fb2.group({
      college: new FormControl(this.data2.college, [Validators.required]),
      cgpa: new FormControl(this.data2.cgpa, [Validators.required]),
      branch: new FormControl(this.data2.branch, [Validators.required])
    })
  }

  onNavigateBehind(){
    this.data2Change.emit(this.form2.value);
    this.screenChange.emit(this.screen);
  
  }

  }

  
  

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormModel } from './../app.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
  export class Form1Component implements OnInit {

    @Input() data: FormModel;
    @Output() dataChange = new EventEmitter();
    form;

    @Output() screenChange = new EventEmitter<boolean>();
    screen: boolean = true;
    
    constructor( private fb: FormBuilder ) {
    }

    ngOnInit() {
      this.initForm();
    }

    initForm() {
      this.form = this.fb.group({
        name: new FormControl(this.data.name, [Validators.required]),
        dob: new FormControl(this.data.dob, [Validators.required]),
        phone: new FormControl(this.data.phone, [Validators.required]),
        gender:  new FormControl(this.data.gender, [Validators.required])
      })

      console.log(this.form)
    }

    onNavigateForward(){
      this.dataChange.emit(this.form.value);
      this.screenChange.emit(this.screen);
    }
  }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contactForm;

  constructor(private fb: FormBuilder) { }

  initForm(){
  	this.contactForm = this.fb.group({
  		name: new FormControl('', [Validators.required]),
  		phone: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  	})
  }

  ngOnInit() {
    this.initForm();
  }

}

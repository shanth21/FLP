import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

screen:boolean = true;

formData: FormModel = new FormModel();
formData2: FormModel2 = new FormModel2();

changeScreen(e){
  this.screen = !e;
  console.log(this.formData )
}
}

export class FormModel {
  name: string;
  dob: any;
  phone: string;
  gender: string;
  college: string;
  cgpa: string;
  branch: string;

}

export class FormModel2 {
  college: string;
  cgpa: string;
  branch: string;
  
}

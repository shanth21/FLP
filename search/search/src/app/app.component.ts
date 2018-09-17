import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employees = [
    {
    "_id": "5b98b56ff9aacc1187abbe4e",
    "firstname": "Vinay",
    "surname": "kumar",
    "mobile": 8867609885,
    "email": "vinayk@accionlabs.com",
    "dob": 21091996,
    "password": "AccionLabs@123",
    "gender": "male",
    "emp_id": 2347
  },
  {
    "_id": "5b98b56ff9aacc1187abbe4e",
    "firstname": "Vinayaka",
    "surname": "kashyap",
    "mobile": 8817271005,
    "email": "vinaykashyap@accionlabs.com",
    "dob": 15081994,
    "password": "labs@123",
    "gender": "male",
    "emp_id": 2348
  },

  {
    "_id": "5b98b56ff9aacc1187abbe4e",
    "firstname": "Shanth",
    "surname": "Kua",
    "mobile": 9480869029,
    "email": "shanth.gait@accionlabs.com",
    "dob": 17091996,
    "password": "bs@123",
    "gender": "male",
    "emp_id": 2349
  }

  ]
}

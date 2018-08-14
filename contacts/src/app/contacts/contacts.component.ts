import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

	contacts : Contact[] = [
	
	new Contact('Shanth', 9480879021),
	new Contact('John', 8970654210),
	new Contact('Russ', 9080678901),
	new Contact('Joey', 8970654210),
	new Contact('John', 9786543211),
	new Contact('Blue', 7087671231)
]

  constructor() { }

  ngOnInit() {
  }

}

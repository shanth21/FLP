	import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	contacts: Contacts[] = [];
	notName = '';
	notPhoneNum = ''

	form: Contacts = {
		name: "",
		phone: "",
		city: ""
	}

	constructor() {
		this.initContacts();
	}

	validName(event){
		var nameMatch = this.form.name.match(/^[a-zA-Z]+$/);
		if(!nameMatch){
			this.notName = 'Enter characters only';
		}else{
			this.notName = '';
		}
	}

	validPhoneNum(event){
		var numMatch = this.form.phone.match(/^[0-9]+$/)
		if(!numMatch){
			this.notPhoneNum = 'Enter numbers only'
		}else{
			this.notPhoneNum = '';
		}
	}




	initContacts() {
		this.contacts.push({name: 'Shanth', phone: "9480869029", city: 'Bengaluru'})
	}

	addContact = () => {
		console.log(this.form);
		if(this.validName(event) && this.validPhoneNum(event)){
		this.contacts.push(this.form);
	}
}	

	deleteContact(index) {
		console.log('deleting index', index)
		this.contacts.splice(index, 1);
	}
  


}

class Contacts {
	name: string;
	phone: string;
	city: string;
}

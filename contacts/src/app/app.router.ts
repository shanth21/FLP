import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
	
	{path: '', component: ContactsComponent},
	{path: 'contacts', component: ContactsComponent},
	{path: 'add', component: AddComponent},
	{path: '**', component: ContactsComponent},
];



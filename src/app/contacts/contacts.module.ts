import { ContactsComponent } from './views/contacts/contacts.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { contactRoutes } from './contacts.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(contactRoutes)
  ]
})
export class ContactsModule { }

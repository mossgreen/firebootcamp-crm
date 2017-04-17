import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './../contact/contact-edit/contact-edit.component';
import { ContactEditFormComponent } from './../contact/contact-edit/contact-edit-form.component'


import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './contact.routes';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        ContactListComponent,
        ContactDetailComponent,
        ContactEditComponent,
        ContactEditFormComponent
    ]
})
export class ContactModule { }
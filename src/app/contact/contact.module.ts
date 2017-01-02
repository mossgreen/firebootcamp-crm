import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactEditFormComponent} from './contact-edit-form.component';
import {ContactDetailComponent} from './contact-detail-component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './contact.routes';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [
        ContactListComponent,
        ContactDetailComponent,
        ContactEditFormComponent
        ]
})
export class ContactModule { }
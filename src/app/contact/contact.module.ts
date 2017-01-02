
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './contact.routes';

import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactEditFormComponent} from './contact-edit-form.component';
import {ContactDetailComponent} from './contact-detail-component';
import {ContactListTableComponent} from './../contact/contact-list/contact-list-table.component';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [
        ContactListComponent,
        ContactListTableComponent,
        ContactDetailComponent,
        ContactEditFormComponent
        ]
})
export class ContactModule { }
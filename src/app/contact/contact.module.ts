import { ContactListComponent } from './contact-list/contact-list.component';

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './contact.routes';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [
        ContactListComponent,
        ]
})
export class ContactModule { }
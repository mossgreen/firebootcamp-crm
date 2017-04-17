import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactEditFormComponent } from './contact-edit/contact-edit-form.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ContactListComponent },
    { path: 'detail/:id', component: ContactDetailComponent },
    { path: 'edit/:id', component: ContactEditComponent }
])
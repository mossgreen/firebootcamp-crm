import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactDetailComponent} from './contact-detail-component';
import {ContactEditFormComponent} from './contact-edit-form.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'contact', redirectTo: 'contact/list', pathMatch: 'full' },
  { path: 'contact/list', component: ContactListComponent },
  { path: 'contact/detail/:id', component: ContactDetailComponent },
  { path: 'edit/:id', component: ContactEditFormComponent }

]);
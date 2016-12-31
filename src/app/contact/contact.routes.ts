import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'contact', redirectTo: 'contact/list', pathMatch: 'full' },
  { path: 'contact/list', component: ContactListComponent },
  
]);
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'contacts', redirectTo: 'contacts/list', pathMatch: 'full' },
  { path: 'contacts/list', component: ContactListComponent },
  
]);
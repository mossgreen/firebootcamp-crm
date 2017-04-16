import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', redirectTo: 'list', pathMatch: 'full' },  
  { path: 'list', component: CompanyListComponent },
]);
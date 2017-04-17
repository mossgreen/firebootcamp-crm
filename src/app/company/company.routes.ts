import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CompanyListComponent },
  { path: 'detail/:id', component: CompanyDetailComponent },
  { path: 'edit/:id', component: CompanyEditComponent }
]);
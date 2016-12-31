import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import {CompanyDetailComponent} from './company-detail.component';
import {CompanyEditComponent} from './company-edit.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'companies', redirectTo: 'companies/list', pathMatch: 'full' },  
  { path: 'companies/list', component: CompanyListComponent },
  {path:'companies/detail/:id', component:CompanyDetailComponent},
  {path:'company/edit/id',component:CompanyEditComponent},
]);
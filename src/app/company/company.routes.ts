import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import {CompanyDetailComponent} from './company-detail.component';
import {CompanyEditComponent} from './company-edit.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'company', redirectTo: 'company/list', pathMatch: 'full' },  
  { path: 'company/list', component: CompanyListComponent },
  {path:'company/detail/:id', component:CompanyDetailComponent},
  {path:'company/edit/id',component:CompanyEditComponent},
]);
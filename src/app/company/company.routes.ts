import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    //when this collection of routes is handled '' is the default, 
    //but it immediately redirects to the 'list' route.
    //Because we intend to route anything coming in from '/company' to this collection, 
    //it will initially be handled by the default route, and redirected to 'list' in the browser.
    {path:'', redirectTo: 'list', pathMatch:'full'},
    {path:'list',component:CompanyListComponent},
]);
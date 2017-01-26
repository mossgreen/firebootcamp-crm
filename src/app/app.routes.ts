import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


/**
 * Best Practice:
 * have one top level routing configureation
 * have separate feature areas divided up into modules
 * top level config will know about the modules, but
 * will know to only load them into memory when they are navigated to
 */
const appRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'company', loadChildren: './company/company.module#CompanyModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
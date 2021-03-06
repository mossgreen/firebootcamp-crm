import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'company', loadChildren: 'app/company/company.module#CompanyModule' },
    { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
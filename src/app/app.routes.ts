import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'company', loadChildren: './company/company.module#CompanyModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes:Routes=[
    {path:'', loadChildren:'app/home/home.module#HomeModule'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
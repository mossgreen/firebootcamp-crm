import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: HomeComponent}
]);
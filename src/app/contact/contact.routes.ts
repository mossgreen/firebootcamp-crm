import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component'

export const routing:ModuleWithProviders = RouterModule.forChild([
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list',component:ContactListComponent}
])
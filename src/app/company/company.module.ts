import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {routing} from './company.routes';
import{CompanyListComponent} from './company-list/company-list.component';

@NgModule({
    imports:[
        SharedModule,
        routing,
        FormsModule,
    ],
    declarations:[
        CompanyListComponent,
    ]

})

export class CompanyModule{}
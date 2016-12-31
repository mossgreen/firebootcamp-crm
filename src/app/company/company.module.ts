import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule }  from '../shared/shared.module';
import { routing } from './company.routes';
import { CompanyListComponent }   from './company-list/company-list.component';
import {CompanyDetailComponent} from './company-detail.component';
import {CompanyEditComponent} from './company-edit.component';
import {CompanyListTableComponent} from './company-list/company-list-table.component';

@NgModule({
    imports: [
        SharedModule, 
        routing, 
        FormsModule
        ],
    declarations: [
        CompanyListComponent,
        CompanyDetailComponent,
        CompanyEditComponent,
        CompanyListTableComponent,
        ]
})
export class CompanyModule { }
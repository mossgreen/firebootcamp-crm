import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {ContactListTableComponent} from './../contact/contact-list/contact-lsit-table.component';
import {UIRowComponent} from './ui-row.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,        
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ContactListTableComponent,
        UIRowComponent,
    ]
})
export class SharedModule { }
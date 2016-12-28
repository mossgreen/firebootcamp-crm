import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule, //import the CommonModule because the SharedModule needs common directives
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[]

})

export class SharedModule{}
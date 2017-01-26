import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UIRowComponent} from './ui-row.component';

/**
 * SharedModule holds common components, directives and pips and allows them to be shared with any modules that need them.
 * Most components in the system will need the FormsModule and the HttpModule,
 * so it makes sense to include them once on the shared module.
 */
@NgModule({
    imports: [
        CommonModule,//SharedModule needs common directives
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,        
    ],
    /**
     * NOTE: we import them and re-export them
     * doing so we enable all of those modules to not need to include those imports themselves
     */

    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        UIRowComponent,
    ]
})
export class SharedModule { }
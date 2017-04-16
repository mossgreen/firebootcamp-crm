import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[

    ]
})
export class SharedModule{}
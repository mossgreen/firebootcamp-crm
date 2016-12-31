import { NgModule } from '@angular/core';
import {CompanyService} from '../company/company.service';
import {ContactService} from '../contact/contact.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
      //services that we want to declare globally will go here
      CompanyService,
      ContactService
    ],
})
export class CoreModule {}
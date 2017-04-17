import { NgModule } from '@angular/core'
import { CompanyService } from '../company/company.service';
import { ContactService } from '../contact/contact.service';

/**
 * Each time the Shared module is instantiated within a lazy-loaded component a new instance of it's services is created. 
 * Especially when dealing with services that maintain state this is a probem.
 * Rather than declaring all of these services in the AppModule (will only instantiated once)
 * best to create a core module, declare the globally available service in the core module, and import the core module into the app module
 * 
 * the sole purpose id to declare application wide singleton services
 */

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

export class CoreModule { }
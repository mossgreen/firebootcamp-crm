import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule }   from './core/core.module';
import {HomeModule} from './home/home.module';
import {CompanyModule} from './company/company.module';
import {ContactModule} from './contact/contact.module';
import { routing } from './app.routes';


/**
 * every app has a root module that is bootstrapped to launch the application
 * as the application grows we will add feature modules and then import into root module
 */

/**use @NgModule decorator to define the metadata for module */
@NgModule({

  /**'declarations' array defines which components,directives and pips belong to the module */
  declarations: [
    AppComponent, //AppComponent is the created when the application is created 
  ],

  /**
   * 'import' array defines components,directives and pips needed by the component in this module
   */
  imports: [
    BrowserModule, //used for many comman directives like NgIf and NgFor
    FormsModule, //to make template driven forms available
    HttpModule, //to enable the ability to call API endpoints
    CoreModule,
    routing,
    HomeModule,
    CompanyModule,
    ContactModule,
  ],
  /**
   * 'providers' array declares services declared at the application level that any component can use
   */
  providers: [],
  /**
   * 'bootstrap'property indicates the component that will placed in the DOM when app launches
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
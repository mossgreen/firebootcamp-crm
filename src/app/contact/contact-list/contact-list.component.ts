import { Component, OnInit } from '@angular/core';
import { Contact } from './../../shared/models';
import { ContactService } from './../contact.service';
import {ContactListTableComponent} from './contact-list-table.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



@Component({
    template: `   
        <div class="row heading-row contact-list-component">
            <div class="col-sm-9">
                <h2>Contacts</h2>
            </div>
            <div class="col-sm-3">
                <button routerLink="/contact/edit/new" class="btn btn-success pull-right">Add</button>
            </div>
        </div>
        <div class="row">  
            <div class="col-sm-12">   
            <fbc-contact-list-table 
                (deleteContactSelected)="deleteContact($event)" 
                [contacts]="contacts">
            </fbc-contact-list-table>
            </div>
        </div>  
    `
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    result: any;

    constructor(
        private contactService: ContactService) {
    }

    ngOnInit() {
        this.getContacts();
    }

    getContacts() {
        this.contactService.getContacts()
            .subscribe((contacts: Contact[]) => this.contacts = contacts);
    }

    deleteContact(contactId: number) {
        this.contactService.deleteContact(contactId)
            .subscribe((deletedContact: Contact) => {
                this.contacts = this.contacts.filter((contact: any) => contact.id !== deletedContact.id);
            });
    }

}
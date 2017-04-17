import { ActivatedRoute } from '@angular/router';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './../../shared/models/contact.model';

@Component({
    selector: 'fbc-contact-detail',
    template: `
    <div class="row heading-row company-list-component">
        <div class="col-sm-9">
            <h2>{{contact?.name}}</h2>
        </div>
        <div class="col-sm-3">
            <button routerLink="/contact/edit/{{contact?.id}}" class="btn btn-success pull-right">Edit</button>
        </div>
    </div>
    <div class="well">
        <ui-row label="Company" value="{{contact?.company}}" ></ui-row>
        <ui-row label="Address" value="{{contact?.address}}" ></ui-row>
        <ui-row label="City" value="{{contact?.city}}" ></ui-row>
        <ui-row label="State" value="{{contact?.state}}" ></ui-row>
        <ui-row label="PostCode" value="{{contact?.postCode}}" ></ui-row>
        <ui-row label="Phone" value="{{contact?.phone}}" ></ui-row>
        <ui-row label="Email"  value="{{contact?.email}}" ></ui-row>        
    </div>
    `
})
export class ContactDetailComponent implements OnInit {
   contact: Contact = <Contact>{};

    constructor(
        private contactService: ContactService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute
            .params
            .filter((params: any) => params['id'] !== 'new')
            .subscribe((params) => {
                this.getContact(+params['id']);
            });
    }

    getContact(contactId: number) {
        this.contactService.getContact(contactId)
            .subscribe(contact => this.contact = contact);
    }
}
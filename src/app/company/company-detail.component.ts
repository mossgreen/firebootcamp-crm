import { ContactService } from './../contact/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from './../company/company.service';
import { Component, OnInit } from '@angular/core';

import { Company, Contact } from './../shared/models';

@Component({
    selector: 'fbc-company-detail',
    templateUrl: './company-detail.component.html',
    styles: [
        `.row{padding-top:10px;}`
    ]
})

export class CompanyDetailComponent implements OnInit {
    editMode: boolean = false;
    company: Company = <Company>{ name: '' };
    contacts: Contact[] = [];
    selectedContact: Contact;
    companyId: number;

    constructor(
        private _companyService: CompanyService,
        private _activatedRoute: ActivatedRoute,
        private _contactService: ContactService,
        private _router: Router,
    ) { }

    ngOnInit() {
        this._activatedRoute
            .params
            .filter((params: any) => params['id'] !== 'new')
            .subscribe((params) => {
                this.companyId = +params['id'];
                this.getCompany(this.companyId);
            });
    }

    updateContact(contact: Contact) {
        this._contactService.saveContact(contact)
            .subscribe(c => this.loadContacts(this.companyId));
    }

    editContact(contact: Contact) {
        this.selectedContact = contact;
        this._router.navigateByUrl(`/contact/contact-edit/${contact.id}`);
    }

    getCompany(companyId: number){
        this._companyService.getCompany(companyId)
        .subscribe((company:Company) => {
            this.company = company;
        });
        this.loadContacts(companyId);
    }

    loadContacts(companyId: number){
        this._contactService.getContactsForCompany(companyId)
        .subscribe(contacts => {
            this.contacts = contacts;
        });
    }

}

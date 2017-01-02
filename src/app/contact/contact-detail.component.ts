import {Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company, Contact } from './../shared/models';
import{ContactService} from './contact.service';
import { CompanyService } from './../company/company.service';

@Component({
    selector:'fbc-contact-detail',
    templateUrl:'./contact-detail.component.html',

})

export class ContactDetailComponent implements OnInit{
      editMode: boolean = false;
    company: Company = <Company>{ name: '' };
    contact:Contact = <Contact>{name:''};
    contacts: Contact[] = [];

    selectedContact: Contact;
    companyId: number;
    contactId:number;

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
                this.contactId = +params['id'];
                this.getContact(this.contactId);
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

    getContact(contactId:number){
        this._contactService.getContact(contactId)
        .subscribe((contact:Contact) => {
            this.contact = contact
        })
    }

    loadContacts(companyId: number){
        this._contactService.getContactsForCompany(companyId)
        .subscribe(contacts => {
            this.contacts = contacts;
        });
    }

}
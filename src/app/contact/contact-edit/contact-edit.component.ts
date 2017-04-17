import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from './../../shared/models';
import { ContactService } from './../contact.service';

@Component({
    selector: 'fbc-contact-edit',
    template: `
    <fbc-contact-edit-form (onSubmit)="saveContact($event)" [contact]="selectedContact"></fbc-contact-edit-form>
    `
})
export class ContactEditComponent implements OnInit {
    selectedContact = <Contact>{ id: 0 };

    constructor(
        private activatedRoute: ActivatedRoute,
        private contactService: ContactService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params
            .filter((params: any) => params['id'] !== 'new')
            .subscribe((params) => {
                this.getContact(+params['id']);
            });
    }

    getContact(contactId: number) {
        this.contactService.getContact(contactId)
            .subscribe(contact => {
                this.selectedContact = contact;
            });
    }

    saveContact(contact: Contact) {
        this.contactService.saveContact(contact)
            .subscribe(c => {
                this.router.navigate([`/contact/detail`, c.id]);
            });
    }

}

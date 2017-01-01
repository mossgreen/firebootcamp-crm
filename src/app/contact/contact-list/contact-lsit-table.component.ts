import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from './../../shared/models';

@Component({
    selector: 'fbc-contact-list-table',
    template: `
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Name</th>                    
                    <th>Company Name</th>                    
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tr *ngFor="let contact of contacts">
                <td>{{contact.name}}</td>                
                <td>{{contact.companyName}}</td>                
                <td>{{contact.email}}</td>                
                <td class="button-column>
                    <button routerLink="/contact/detail/{{contact.id}}" class="btn btn-default">Details</button>
                    <button routerLink="/contact/edit/{{contact.id}}" class="btn btn-default">Edit</button>
                    <button (click)="confirmDelete(contact)" class="btn btn-default">Details</button>                    
                </td>
            </tr>
        </table>
    `,
    styles: [`
        .button-column{
            white-space.nowarp;
        }
    `]
})

export class ContactListTableComponent {
    @Input() contacts:Contact[] = [];
    @Output() deleteContactSelected = new EventEmitter<number>();

    confirmDelete(contact:Contact){
        let confirmed = confirm("Are you sure you want to delete ${contact.name}?");

        if(confirmed)
            this.deleteContactSelected.emit(contact.id);
    }
}
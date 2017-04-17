import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from './../../shared/models';

@Component({
    selector: 'fbc-company-list-table',
    template: `
     <table id="company-list-table" class="table table-hover table-striped company-list-table-component">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               <tr *ngIf="companies?.length === 0">
                   <td colspan="4">No companies to display</td>
               </tr>
               <tr class="item" *ngFor="let company of companies">
                    <td>{{company.name}}</td>
                    <td>{{company.phone}}</td>
                    <td>{{company.email}}</td>
                    <td class="button-column">
                        <button routerLink="/company/detail/{{company.id}}" class="btn btn-default" >Details</button>
                        <button routerLink="/company/edit/{{company.id}}" class="btn btn-default" >Edit</button>
                        <button (click)="confirmDelete(company)" class="btn btn-default">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [
        `
        .button-column {
            white-space: nowrap;
        }
        `
    ]
})


export class CompanyListTableComponent {
    @Input() companies: Company[] = [<Company>{}];
    @Output() deleteCompanySelected = new EventEmitter<number>();

    confirmDelete(company: Company) {
        let confirmed = confirm(`Are you sure you want to delete ${company.name}?`);

        if (confirmed) {
            this.deleteCompanySelected.emit(company.id);
        }
    }
}
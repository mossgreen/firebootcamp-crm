import { Component, OnInit } from '@angular/core'
import { Company } from './../../shared/models'
import { CompanyService } from './../company.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    template: `   
        <div class="row heading-row company-list-component">
            <div class="col-sm-9">
                <h2>Companies</h2>
            </div>
            <div class="col-sm-3">
                <button routerLink="/company/edit/new" class="btn btn-success pull-right">Add</button>
            </div>
        </div>
        <div class="row">  
            <div class="col-sm-12">   
                <fbc-company-list-table 
                    (deleteCompanySelected)="deleteCompany($event)" 
                    [companiesFormTable]="companiesToTable">
                </fbc-company-list-table>
            </div>
        </div>  
    `
})

//this page lists all the companies
export class CompanyListComponent implements OnInit{

    /**this componnet holds a company list to display on the page
     * and a result, which stands for the user input, like detais, edit or delete
     */
    companiesToTable: Company[];
    result:any;

    constructor(
        private companyService:CompanyService
    ){}

// call getCompanies() method when initializing
    ngOnInit(){
        this.getCompanies();
    }

//make the service to call getCompanies, and make companies array filled with callback data
    getCompanies(){
        this.companyService.getCompanies()
        .subscribe((companies:Company[])=> this.companiesToTable = companies);
    }

    deleteCompany(companyId: number) {
        this.companyService.deleteCompany(companyId)
            .subscribe((deletedCompany: Company) => {
                this.companiesToTable = this.companiesToTable.filter((
                    company: any) => company.id !== deletedCompany.id);
            });
    }
}
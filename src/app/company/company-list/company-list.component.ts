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
                [companies]="companies">
            </fbc-company-list-table>
            </div>
        </div>  
    `
})

export class CompanyListComponent implements OnInit{
    companies: Company[];
    result:any;

    constructor(
        private companyService:CompanyService
    ){}

    ngOnInit(){
        this.getCompanies();
    }

    getCompanies(){
        this.companyService.getCompanies()
        .subscribe((companies:Company[])=> this.companies = companies);
    }
    
    deleteCompany(companyId: number) {
        this.companyService.deleteCompany(companyId)
            .subscribe((deletedCompany: Company) => {
                this.companies = this.companies.filter((
                    company: any) => company.id !== deletedCompany.id);
            });
    }
}
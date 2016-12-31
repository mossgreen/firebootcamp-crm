import {ActivatedRoute, Router} from '@angular/router';
import {Company} from './../shared/models';
import {CompanyService} from './company.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { CanComponentDeactivate } from './../shared/can-deactivate-guard.service';

@Component({
    selector: 'fbc-company-edit',
    template: `
    <h2>Edit Company</h2>
    <div class="well">
    <form (ngSubmit)="saveCompany()" #companyForm="ngForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" required [(ngModel)]="company.name" #name="ngModel">
            <div [hidden]="name.valid || name.untouched" class="alert alert-danger">
                Name is required 
            </div>
        </div>
        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" name="phone" [(ngModel)]="company.phone" #phone="ngModel">            
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" name="email" required [(ngModel)]="company.email" #email="ngModel">
            <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                Email is required
            </div>
        </div>
        <button type="submit" class="btn btn-default" [disabled]="!companyForm.form.valid">Submit</button>
    </form>
    </div>
    `
})

export class CompanyEditComponent implements OnInit, CanComponentDeactivate{
    formSubmitted: boolean = false;
    company:Company = <Company>{name:'', phone:'', email:''};

    @ViewChild('companyForm') public companyForm:NgForm;

    constructor(
        private _companyService:CompanyService,
        private _router:Router,
        private _activatedRoute: ActivatedRoute
    ){}
    ngOnInit(){
        this._activatedRoute
        .params
        .filter((params:any) => params['id'] !== 'new')
        .subscribe((params) => {
            let id= +params['id'];
            this.getCompany(id);
        });
    }

    getCompany(companyId:number){
        this._companyService.getCompany(companyId)
        .subscribe((company:Company) => {
            this.company = company;
        });
    }

    saveCompany(){
        let id = this._activatedRoute.snapshot.params['id'];
        this.formSubmitted = true;

        if(id === 'new'){
            this._companyService.addCompany(this.company)
            .subscribe(newCompany => {
                this._router.navigate([`/company/details`, newCompany.id])
            ;});
        }else{
            this._companyService.updateCompany(this.company)
            .subscribe(() => this._router.navigate([`/company/detail`, this.company.id]));
        }
    }

    canDeactivate(): Promise<boolean> | boolean{
        if(!this.companyForm.dirty || this.formSubmitted){
            return true;
        }
        return confirm('You have unsaved chagnes, Are you sure you want to leave?');
    }
}
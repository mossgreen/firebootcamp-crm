import { CompanyService } from '../../company/company.service';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Contact, Company } from './../../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'fbc-contact-edit-form',
    template: `
    <h2>Edit Contact</h2>  
    <div class="well">
    <form [formGroup]="contactForm" novalidate>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" required formControlName="name">
            <div *ngIf="contactForm.get('name').hasError('required') && contactForm.get('name').touched" class="alert alert-danger">
                Name is required
            </div>
        </div>
        <div class="form-group">
            <label for="companyId">Company</label>
            <select class="form-control" name="companyId" required formControlName="companyId">                
                <option *ngFor="let c of availableCompanies" [value]="c.id">{{c.name}}</option>
            </select>
            <div *ngIf="contactForm.get('companyId').hasError('required') && contactForm.get('companyId').touched" class="alert alert-danger">
                Company is required
            </div>
        </div>
        <div *ngIf="showAdditionalInfo">
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" name="address" formControlName="address" />
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" name="city" formControlName="city" />
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input type="text" class="form-control" name="state" formControlName="state" />
            </div>
            <div class="form-group">
                <label for="postCode">Post Code</label>
                <input type="text" class="form-control" name="postCode" formControlName="postCode" />
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" name="phone" formControlName="phone" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" name="email" formControlName="email" />
            </div>
            </div>
        <div class="form-group">
            <button (click)="saveContact()" [disabled]="!contactForm.valid" class="btn btn-default" >Submit</button>
            <button type="button" class="btn btn-link" *ngIf="!showAdditionalInfo" 
            (click)="showAdditionalInfo = true">Show Additional Information
            </button>
            <button type="button" class="btn btn-link" *ngIf="showAdditionalInfo" 
            (click)="showAdditionalInfo = false">Hide Additional Information
            </button>
        </div>
    </form>
    </div>
    `
})

export class ContactEditFormComponent implements OnInit {
    @Input() contact;
    @Output() onSubmit = new EventEmitter<Contact>();
    availableCompanies: Company[] = [];
    showAdditionalInfo: boolean;

    contactForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private companyService: CompanyService
    ) { }


    ngOnInit(): void {
        this.loadAvailableCompanies();
        this.buildForm();
    }

    buildForm(): void {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            companyId: ['', Validators.required],
            address: [''],
            city: [''],
            state: [''],
            postCode: [''],
            phone: [''],
            email: [''],
        });
    }

    loadAvailableCompanies(): void {
        this.companyService.getCompanies()
            .subscribe(companies => {
                this.availableCompanies = companies;
            });
    }

    saveContact(): void {
        this.onSubmit.emit(this.contactForm.value);
    }

}
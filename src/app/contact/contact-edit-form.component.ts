import { CompanyService } from './../company/company.service';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Contact, Company } from './../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'fbc-contact-edit-form',
    template: `
    <h2>Edit Contact</h2>  
    <div class="well">
    <form (ngSubmit)="saveContact()" [formGroup]="contactForm" novalidate>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" required formControlName="name">
            <div *ngIf="formErrors.name" class="alert alert-danger">
                {{ formErrors.name }}
            </div>
        </div>
        <div class="form-group">
            <label for="companyId">Company</label>
            <select class="form-control" name="companyId" required formControlName="companyId">                
                <option *ngFor="let c of availableCompanies" [value]="c.id">{{c.name}}</option>
            </select>

            <div *ngIf="formErrors.companyId" class="alert alert-danger">
                {{ formErrors.companyId }}
            </div>
        </div>
        <div *ngIf="showAdditionalInfo">
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" name="address" formControlName="address" />
                <div *ngIf="formErrors.address" class="alert alert-danger">
                    {{ formErrors.address }}
                </div>
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" name="city" formControlName="city" />
                <div *ngIf="formErrors.city" class="alert alert-danger">
                    {{ formErrors.city }}
                </div>
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input type="text" class="form-control" name="state" formControlName="state" />
                <div *ngIf="formErrors.state" class="alert alert-danger">
                    {{ formErrors.state }}
                </div>
            </div>
            <div class="form-group">
                <label for="postCode">Post Code</label>
                <input type="text" class="form-control" name="postCode" formControlName="postCode" />
                <div *ngIf="formErrors.postCode" class="alert alert-danger">
                    {{ formErrors.postCode }}
                </div>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" name="phone" formControlName="phone" />
                <div *ngIf="formErrors.phone" class="alert alert-danger">
                    {{ formErrors.phone }}
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" name="email" formControlName="email" />
                <div *ngIf="formErrors.email" class="alert alert-danger">
                    {{ formErrors.email }}
                </div>
            </div>
            </div>
        <div class="form-group">
            <button type="submit" [disabled]="!contactForm.valid" class="btn btn-default" >Submit</button>
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

export class ContactEditFormComponent implements OnInit, OnChanges {
    @Input() contact;
    @Output() onSubmit = new EventEmitter<Contact>();

    availableCompanies: Company[] = [];
    showAdditionalInfo: boolean;
    formSubmitted: boolean = false;

    contactForm: FormGroup;

    formErrors: any = {
        'name': '',
        'companyId': '',
        'address': '',
        'city': '',
        'state': '',
        'postCode': '',
        'phone': '',
        'email': '',
    };

    validationMessages: any = {
        'name': { 'required': 'Name is required.' },
        'companyId': { 'required': 'Company is required.' },
        'address': {},
        'city': {},
        'state': {},
        'postCode': {},
        'phone': {},
        'email': {},
    };

    constructor(
        private _fb:FormBuilder,
        private _companyService:CompanyService
    ){}

    ngOnInit():void {
        this.loadAvailableCompanies();
        this.buildForm();
    }

    ngOnChanges(changes:SimpleChanges):void{
        this.buildForm();
    }


    buildForm(): void {
        this.contactForm = this._fb.group({
            'name': [this.contact.name, Validators.required],
            'companyId': [this.contact.companyId, Validators.required],
            'address': [this.contact.address],
            'city': [this.contact.city],
            'state': [this.contact.state],
            'postCode': [this.contact.postCode],
            'phone': [this.contact.phone],
            'email': [this.contact.email],
        });

        this.contactForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }


    loadAvailableCompanies(){
        this._companyService.getCompanies()
        .subscribe(companies =>{
            this.availableCompanies = companies;
        });
    }

    saveContact(){
        Object.assign(this.contact,this.contactForm.value);
        this.onSubmit.emit(this.contact);
    }

    onValueChanged(data?:any){
        if(!this.contactForm){return;}
        const form = this.contactForm;

        for (const field in this.formErrors){
            this.formErrors[field] = '';
            const control = form.get(field);

            if(control && control.dirty && !control.valid){
                const messages = this.validationMessages[field];
                for(const key in control.errors){
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

}
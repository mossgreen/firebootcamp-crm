import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

import { Contact } from './../shared/models';
import { API_BASE } from '../app.config';

@Injectable()
export class ContactService {

    constructor(private _http: Http) { }

    getContacts(): Observable<Contact[]> {
        return this._http.get(API_BASE + `contact`)
            .map((contacts: Response) => contacts.json())
            .catch(this.handleError);
    }

    getContact(id: number): Observable<Contact> {
        return this._http.get(API_BASE + `contact/${id}`)
            .map((contacts: Response) => contacts.json())
            .catch(this.handleError);
    }

    getContactsForCompany(companyId: number): Observable<Contact[]> {
        return this._http.get(API_BASE + `contact/getbycompany/${companyId}`)
            .map((contacts: Response) => contacts.json())
            .catch(this.handleError);
    }

    saveContact(contact: Contact): Observable<Contact> {
        let contactJson = JSON.stringify(contact);

        if (contact.id) {
            // Update using PUT
            return this._http.put(API_BASE + `contact/${contact.id}`, contactJson, this.jsonHeaderOptions())
                .map(response => response.json())
                .catch(this.handleError);
        }

        // Create using POST        
        return this._http.post(API_BASE + `contact`, contactJson, this.jsonHeaderOptions())
            .map(response => response.json())
            .catch(this.handleError);
    }

    deleteContact(contactId: number): Observable<Contact> {
        return this._http.delete(API_BASE + `contact/${contactId}`)
            .map((contacts: Response) => contacts.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private jsonHeaderOptions() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}
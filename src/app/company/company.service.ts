import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

import { API_BASE } from '../app.config';
import { Company } from './../shared/models';

/** i think this is a DI parttern, since it's an Injectable
 * It calls http to call api, to call CRUD
 * After, we should add this service to company module
 * However, we import company and contact service from core.module, 
 * so we will add this service to core.module.ts
*/
@Injectable()
export class CompanyService {
    constructor(private _http: Http) { }
    getCompanies(): Observable<Company[]> {
        return this._http.get(API_BASE + 'company')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getCompany(companyId: number): Observable<Company> {
        return this._http.get(API_BASE + `company/${companyId}`)
            .map((companies: Response) => companies.json())
            .catch(this.handleError);
    }

    addCompany(company: Company): Observable<Company> {
        let companyJson = JSON.stringify(company);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(API_BASE + `company`, companyJson, options)
            .map((response: any) => response.json)
            .catch(this.handleError);
    }

    updateCompany(company: Company): Observable<Company> {
        let companyJson = JSON.stringify(company);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(API_BASE + 'company/${company.id}', companyJson, options)
            .map((response: any) => response.json())
            .catch(this.handleError);
    }

    deleteCompany(companyId:number):Observable<Company>{
        return this._http.delete(API_BASE+`company/${companyId}`)
        .map((companies:Response) => companies.json())
        .catch(this.handleError);
    }

    private handleError(error:any){
        let errMsg = (error.message)?error.message:error.statuss?`${error.status} - ${error.statusText}`:`Server error`;
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
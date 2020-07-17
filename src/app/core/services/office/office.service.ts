import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { OfficeModel } from '../../../shared/models/office.model';
import { ApiService } from '../../http/api/api.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private apiService: ApiService) { }

  public handleOfficeNames(offices: OfficeModel[]): OfficeModel[] {
    return Object.keys(offices).map(key => Object.assign({}, {...offices[key], name: key}));
  }

  public handleSingleOfficeNames(office: OfficeModel, data): OfficeModel {
    return Object.assign({}, { ...office, ...data });
  }

  private extractData(response: any): any {
    // TODO: handle data
    return response;
  }

  private handleError(response: any): any {
    return throwError(response.error.message || 'API_FAILURE');
  }

  public getOffices(): Observable<OfficeModel[]> {
    return this.apiService.get({ path: 'offices.json' })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public addOffice(office: OfficeModel): Observable<OfficeModel> {
    return this.apiService.post({ path: 'offices.json', body: office })
      .pipe(
        map(data => data),
        catchError(this.handleError)
      );
  }

  public updateOffice(office: OfficeModel): Observable<OfficeModel> {
    // TODO: add key
    return this.apiService.put({ path: 'offices.json', body: office })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  public deleteOffices(name: string): Observable<any> {
    return this.apiService.delete({ path: `offices/${name}.json` })
      .pipe(
        map(() => name),
        catchError(this.handleError)
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiInterface {
  path: string;
  params?: HttpParams;
  body?: any;
  headers?: HttpHandler;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://bilmakovchik-offices.firebaseio.com';
  constructor(private http: HttpClient) { }

  public get(option: ApiInterface): Observable<any> {
    return this.http.get(`${this.apiUrl}/${option.path}`, { params: option.params });
  }

  public post(option: ApiInterface): Observable<any> {
    return this.http.post(`${this.apiUrl}/${option.path}`, option.body);
  }

  public put(option: ApiInterface): Observable<any> {
    return this.http.put(`${this.apiUrl}/${option.path}`, option.body);
  }

  public delete(option: ApiInterface): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${option.path}`);
  }
}

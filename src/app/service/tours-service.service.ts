import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tours} from "../model/tours";

@Injectable({
  providedIn: 'root'
})
export class ToursServiceService {
  API = 'http://localhost:3000/tuors';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }

  save(tours: Tours): Observable<any> {
    return this.httpClient.post(this.API, tours);
  }
  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API+`/${id}`);
  }
  update(id: any, tours: Tours): Observable<any> {
    return this.httpClient.put(this.API+`/${id}`, tours);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.API+`/${id}`);
  }
}

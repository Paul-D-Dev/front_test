import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pets } from '../models/pets';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  APIURL = 'https://api.yummypets.com/pets/';
  constructor( private http: HttpClient) { }

  getPets(limit): Observable<Pets> {
    return this.http.get<Pets>(this.APIURL + `?limit=${limit}`);
  }
}

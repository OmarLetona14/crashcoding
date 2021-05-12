import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  baseUrl = environment.baseCountriesUrl;

  constructor(private http:HttpClient) { }

  public getAllCountries(){
    return this.http.get(`${this.baseUrl}/all`);
  }
}

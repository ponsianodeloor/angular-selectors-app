import { Injectable } from '@angular/core';
import {Country} from "../interfaces/Country";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiRestCountries = environment.apiRestCountries;

  constructor(
    private http: HttpClient
  ) { }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiRestCountries}/region/${region}`);
  }

  getCountryByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiRestCountries}/alpha/${code}`);
  }

  getCountryByBorderCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiRestCountries}/alpha/${code}`);
  }

}

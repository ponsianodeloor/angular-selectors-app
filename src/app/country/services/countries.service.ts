import { Injectable } from '@angular/core';
import {Country} from "../interfaces/Country";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/region/${region}`)
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegionInterface, regions} from "../../interfaces/Region.interface";
import {MatSelectChange} from "@angular/material/select";
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/Country";
import {ToastrService} from "ngx-toastr";
import {catchError, forkJoin, map, of, switchMap} from "rxjs";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit {

  regions: RegionInterface[] = regions;
  countries: Country[] = [];
  countryByCode: Country[] = [];
  borders: string[] = [];
  //borders: { code: string; name: string }[] = [];

  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private toastr: ToastrService
) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      regions: ['', [Validators.required]],
      countries: ['', [Validators.required]],
      borders: ['', [Validators.required]]
    });
  }

  onRegionChange(event: MatSelectChange) {
    const selectedRegion = event.value;
    if (!selectedRegion) {
      this.countries = [];
      this.borders = [];
      return;
    }
    this.countriesService.getCountriesByRegion(selectedRegion)
      .subscribe(
        countries => {
          this.countries = countries;
          this.toastr.success('Countries loaded successfully');
        },
        error => {
          this.toastr.error('Failed to load countries. Please try again later.');
          console.error('Error:', error);
        }
      );
  }

  onCountryChange(event: MatSelectChange) {
    const selectedCountry = event.value;
    if (!selectedCountry) {
      this.borders = [];
      return;
    }
    this.countriesService.getCountryByCode(selectedCountry).pipe(
      map(country => {
        this.countryByCode = country;
        this.borders = country[0]?.borders || [];
        this.toastr.success('Country details loaded successfully');
      }),
      catchError(error => {
        this.toastr.error('Failed to load country details. Please try again later.');
        console.error('Error:', error);
        return of([]);
      })
    ).subscribe();
  }

  /*onCountryChange(event: MatSelectChange) {
    const selectedCountry = event.value;
    if (!selectedCountry) {
      this.borders = [];
      return;
    }
    this.countriesService.getCountryByCode(selectedCountry).pipe(
      map(country => {
        this.countryByCode = country;
        const borderCodes = country[0]?.borders || [];
        return borderCodes;
      }),
      switchMap(borderCodes => {
        if (borderCodes.length === 0) {
          return of([]);
        }
        return forkJoin(borderCodes.map(code => this.countriesService.getCountryByBorderCode(code)));
      }),
      map(borderCountries => {
        this.borders = borderCountries.map((country, index) => ({
          name: country?.name?.common || `Unknown-${index}`,
          code: country?.cca3 || `Unknown-${index}`
        }));
        this.toastr.success('Country details and borders loaded successfully');
      }),
      catchError(error => {
        this.toastr.error('Failed to load country details. Please try again later.');
        console.error('Error:', error);
        return of([]);
      })
    ).subscribe();
  }

  trackByCode(index: number, item: any): string {
    return item.code;
  }*/

}

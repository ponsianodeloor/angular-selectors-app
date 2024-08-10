import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegionInterface, regions} from "../../interfaces/Region.interface";
import {MatSelectChange} from "@angular/material/select";
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/Country";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit {

  regions: RegionInterface[] = regions;
  countries: Country[] = [];

  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
) { }

  ngOnInit() {

    console.log(this.regions);
    this.myForm = this.fb.group({
      regions: ['', [Validators.required]],
      countries: ['', [Validators.required]],
      borders: ['', [Validators.required]]
    });
  }

  onRegionChange(event: MatSelectChange) {
    const selectedRegion = event.value;
    console.log('Selected region:', selectedRegion);

    this.countriesService.getCountriesByRegion(selectedRegion)
      .subscribe(
        countries => {
          console.log(countries);
          this.countries = countries
        });
  }

  getCountriesByRegion(region: string) {
    console.log(region);
  }

}

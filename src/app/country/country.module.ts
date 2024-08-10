import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';


@NgModule({
  declarations: [
    CountriesPageComponent,
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }

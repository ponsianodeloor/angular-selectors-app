import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import {MaterialModule} from "../material/material.module";
import { FavoriteFoodPageComponent } from './pages/favorite-food-page/favorite-food-page.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CountriesPageComponent,
    SelectorPageComponent,
    FavoriteFoodPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesPageComponent} from "./pages/countries-page/countries-page.component";

const routes: Routes = [
  { path: '', component: CountriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }

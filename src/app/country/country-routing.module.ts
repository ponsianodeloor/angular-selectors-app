import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesPageComponent} from "./pages/countries-page/countries-page.component";
import {SelectorPageComponent} from "./pages/selector-page/selector-page.component";

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: CountriesPageComponent },
      { path: 'selector', component: SelectorPageComponent }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }

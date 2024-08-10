import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesPageComponent} from "./pages/countries-page/countries-page.component";
import {SelectorPageComponent} from "./pages/selector-page/selector-page.component";
import {FavoriteFoodPageComponent} from "./pages/favorite-food-page/favorite-food-page.component";

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: CountriesPageComponent },
      { path: 'selector', component: SelectorPageComponent },
      { path: 'favorite-food', component: FavoriteFoodPageComponent },
      { path: '**', redirectTo: '' }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }

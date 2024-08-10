import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorNotFoundPageComponent} from "./shared/pages/error-not-found-page/error-not-found-page.component";

const routes: Routes = [
  { path: 'countries', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
    { path: '404', component: ErrorNotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

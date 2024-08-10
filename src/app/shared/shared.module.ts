import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorNotFoundPageComponent } from './pages/error-not-found-page/error-not-found-page.component';


@NgModule({
  declarations: [
    ErrorNotFoundPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ErrorNotFoundPageComponent
  ]
})
export class SharedModule { }

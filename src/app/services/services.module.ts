import { JqueryFunctionsService } from './jquery-functions.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchThemAllService } from './catch-them-all/catch-them-all.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CatchThemAllService,
    JqueryFunctionsService
  ],
  declarations: []
})
export class ServicesModule { }

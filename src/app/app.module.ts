import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesModule } from './services/services.module';
import { AgmCoreModule } from '@agm/core';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }

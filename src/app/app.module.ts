import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdToolbarModule, MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';

import { FilmService } from './film.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    MdToolbarModule,
    MaterialModule,
    HttpModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

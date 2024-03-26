import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

//May not need this file it may all be in app.component.ts now?


@NgModule({
  declarations: [AppComponent,
    HeaderComponent,NavComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [AppComponent,HeaderComponent,NavComponent]
})
export class AppModule { }

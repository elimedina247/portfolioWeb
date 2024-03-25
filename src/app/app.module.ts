import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//May not need this file it may all be in app.component.ts now?


@NgModule({
  declarations: [AppComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

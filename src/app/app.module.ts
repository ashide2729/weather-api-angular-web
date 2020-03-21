import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandIconComponent } from './header/brand-icon/brand-icon.component'
import { SearchBarComponent } from './header/search-bar/search-bar.component'
import { BrandNameComponent } from './header/brand-name/brand-name.component'
import { HeaderComponent } from './header/header.component'
import { BodyComponent } from './body/body.compnent'

@NgModule({
  declarations: [
    AppComponent,
    BrandIconComponent,
    SearchBarComponent,
    BrandNameComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

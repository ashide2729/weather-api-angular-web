import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandIconComponent } from './header/brand-icon/brand-icon.component'
import { SearchBarComponent } from './header/search-bar/search-bar.component'
import { BrandNameComponent } from './header/brand-name/brand-name.component'
import { HeaderComponent } from './header/header.component'
import { BodyComponent } from './body/body.compnent';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

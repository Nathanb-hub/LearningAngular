import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSharedModule } from 'projects/first-app/src/app/app.module';
import { SecondAppModule } from 'projects/second-app/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ApparelListComponent } from './apparel-list/apparel-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ApparelListComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppSharedModule,
    SecondAppModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

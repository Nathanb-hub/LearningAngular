import { NgModule,ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppSharedModule{
  static forRoot():ModuleWithProviders<AppSharedModule>{
    return {
      ngModule : AppModule,
      providers:[]
    };
  }
}

export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';

@NgModule({
  declarations: [
    AppComponent,
    KonyvajanloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

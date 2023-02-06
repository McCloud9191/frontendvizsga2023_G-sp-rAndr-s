import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { KonyvComponent } from './konyv/konyv.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    KonyvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



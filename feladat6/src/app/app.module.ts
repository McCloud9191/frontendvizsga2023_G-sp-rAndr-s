import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Konyv } from './konyv';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  konyvek: Array<Konyv> = new Array<Konyv>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<Konyv>>('/feladat6-adatok.json')
    .subscribe(t => {
      this.konyvek = t;
    });
    console.log(this.konyvek);
  };
}

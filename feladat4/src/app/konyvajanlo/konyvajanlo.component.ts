import { Component } from '@angular/core';

@Component({
  selector: 'app-konyvajanlo',
  templateUrl: './konyvajanlo.component.html',
  styleUrls: ['./konyvajanlo.component.scss']
})
export class KonyvajanloComponent {

  nev: string = "";
  ar: number = 0;
  akcio: boolean = false;

  konyv = ['A Gyűrű Szövetsége', '2500', true];
  constructor() { }

}

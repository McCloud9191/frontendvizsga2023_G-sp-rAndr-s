import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponent {
  data = {
    cim: '',
    isbn: ''
  };

  dataList = [];

  toString() {
    // this.dataList.push(this.data);
    // this.data = {
    //   cim: '',
    //   isbn: ''
    // };
  }
}
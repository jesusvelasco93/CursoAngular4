import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  muestraElemento(elem) {
    console.log(elem.value);
    console.log(elem.type);
  }

}

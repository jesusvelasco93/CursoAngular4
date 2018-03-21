import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Una app muy chula';
  num = 5;
  fecha = new Date(2000, 1, 20);
  tipo = 'EUR';
}

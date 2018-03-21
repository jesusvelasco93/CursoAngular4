import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostrarUnMensaje(e) {
    console.log('Se ha detectado el evento pulsado');
    console.log(e);
  }

}

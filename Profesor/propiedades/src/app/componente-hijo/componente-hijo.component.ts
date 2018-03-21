import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: []
})
export class ComponenteHijoComponent {

    habilitado = false;
    @Input() num = 5;
    @Output('miEvento') pulsado = new EventEmitter<string>();

    mostrarMensaje() {
        console.log('Hola mundo!!!');
        this.pulsado.emit('Hola a todos...');
    }

}

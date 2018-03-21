import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styles: []
})
export class CmpBComponent implements OnInit {
  datos: Array<string> = []
  mensaje = '';
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
    this.datosService.emitido.subscribe(
      (dato) => {
        this.mensaje = dato;
      }
    );
  }

  guardar(dato) {
    this.datosService.addDato(dato);
  }
}

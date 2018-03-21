import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styles: []
})
export class CmpAComponent implements OnInit {
  datos: Array<string> = []
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
  }

  guardar(dato) {
    this.datosService.addDato(dato);
  }

  emitir(dato) {
    this.datosService.emitirDato(dato);
  }

}

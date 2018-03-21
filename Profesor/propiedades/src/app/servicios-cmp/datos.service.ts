import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../log.service';

@Injectable()
export class DatosService {

  datos: Array<string> = [];
  emitido = new EventEmitter<string>();

  constructor(private logService: LogService) { }

  getDatos() {
    return this.datos;
  }

  addDato(dato) {
    this.datos.push(dato);
    this.logService.escribirEnConsola('se ha guardado ' + dato);
  }

  emitirDato(dato) {
    this.emitido.emit(dato);
  }

}

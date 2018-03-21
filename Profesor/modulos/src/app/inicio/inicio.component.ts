import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../shared/contador.service';


@Component({
  selector: 'app-inicio',
  template: `
    <h2>Inicio</h2>
    <span>Cuenta: {{contadorService.contador}}</span>
    <button type="button" (click)="incrementar()">Contar</button>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor(public contadorService: ContadorService) { }

  ngOnInit() {
  }

  incrementar() {
    this.contadorService.contador++;
  }


}

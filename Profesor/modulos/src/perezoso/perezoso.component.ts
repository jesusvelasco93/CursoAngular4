import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../app/shared/contador.service';

@Component({
  selector: 'app-perezoso',
  template: `
    <h2>Perezoso</h2>
    <span>Cuenta: {{contadorService.contador}}</span>
    <button type="button" (click)="incrementar()">Contar</button>
  `,
  styles: []
})
export class PerezosoComponent implements OnInit {

  constructor(public contadorService: ContadorService) { }

  ngOnInit() {
  }

  incrementar() {
    this.contadorService.contador++;
  }

}

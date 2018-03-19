import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  @Input() num = 5;
  @Output() pulsado = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje() {
    console.log('Pulsado en el hijo');
    this.pulsado.emit('Enviando mensaje al padre');
  }
}

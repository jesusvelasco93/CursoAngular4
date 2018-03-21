import { Component, OnInit } from '@angular/core';
import { TarjetaCreditoService } from './tarjeta-credito.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styles: []
})
export class TarjetaCreditoComponent implements OnInit {
  numTarjeta: string;
  constructor(private tarjetaCreditoService: TarjetaCreditoService) { }

  ngOnInit() {
    this.numTarjeta = this.tarjetaCreditoService.getNumeroTarjeta();
  }
}

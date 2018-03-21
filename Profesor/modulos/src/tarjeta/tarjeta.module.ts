import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarNumerosPipe } from './tarjeta-credito/ocultar-numeros.pipe';
import { TarjetaCreditoService } from './tarjeta-credito/tarjeta-credito.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [TarjetaCreditoService],
  declarations: [
    TarjetaCreditoComponent,
    OcultarNumerosPipe
  ],
  exports: [
    TarjetaCreditoComponent
  ]
})
export class TarjetaModule { }

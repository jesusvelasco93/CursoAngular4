import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TarjetaModule } from '../tarjeta/tarjeta.module';

import { AppComponent } from './app.component';
// import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
// import { OcultarNumerosPipe } from './tarjeta-credito/ocultar-numeros.pipe';
// import { TarjetaCreditoService } from './tarjeta-credito/tarjeta-credito.service';
import { DoblePipe } from './doble.pipe';
import { ReversePipe } from './reverse.pipe';
import { MarcarRojoDirective } from './marcar-rojo.directive';
import { MarcarAzulDirective } from './marcar-azul.directive';
// import { PerezosoComponent } from './perezoso/perezoso.component';
import { InicioComponent } from './inicio/inicio.component';
import { routing } from './app.routing';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DoblePipe,
    ReversePipe,
    MarcarRojoDirective,
    MarcarAzulDirective,
    // PerezosoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    TarjetaModule,
    routing,
    SharedModule.forRoot()
  ],
  providers: [
    // TarjetaCreditoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

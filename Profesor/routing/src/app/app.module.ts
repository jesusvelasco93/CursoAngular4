import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { routing } from './app.routing';
import { InfoComponent } from './usuario/info/info.component';
import { EditarComponent } from './usuario/editar/editar.component';

import { InfoGuard } from './usuario/info/info.guard';
import { EditarGuard } from './usuario/editar/editar.guard';
import { ErrorComponent } from './error.component';
import { Aux1Reg1Component } from './aux-cmp/aux1-reg1.component';
import { Aux1Reg2Component } from './aux-cmp/aux1-reg2.component';
import { Aux2Reg1Component } from './aux-cmp/aux2-reg1.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    InicioComponent,
    InfoComponent,
    EditarComponent,
    ErrorComponent,
    Aux1Reg1Component,
    Aux1Reg2Component,
    Aux2Reg1Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    InfoGuard,
    EditarGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { routing } from './app.routing';
import { EditarComponent } from './usuario/editar/editar.component';
import { InfoComponent } from './usuario/info/info.component';

import { InfoGuard } from './usuario/info/info.guard';
import { EditarGuard } from './usuario/editar/editar.guard';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuarioComponent,
    EditarComponent,
    InfoComponent
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

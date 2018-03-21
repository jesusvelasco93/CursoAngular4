import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { ServiciosCmpComponent } from './servicios-cmp/servicios-cmp.component';
import { CmpAComponent } from './servicios-cmp/cmp-a/cmp-a.component';
import { CmpBComponent } from './servicios-cmp/cmp-b/cmp-b.component';

import { DatosService } from './servicios-cmp/datos.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent,
    ServiciosCmpComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    LogService,
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

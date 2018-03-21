import { NgModule } from '@angular/core';
import { PerezosoComponent } from './perezoso.component';
import { routing } from './perezoso.routing';
import { SharedModule } from '../app/shared/shared.module';
// import { ContadorService } from './contador.service';


@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [PerezosoComponent]
  // providers: [ContadorService]
})
export class PerezosoModule { }

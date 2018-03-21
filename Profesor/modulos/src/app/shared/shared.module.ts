import { NgModule, ModuleWithProviders } from '@angular/core';
import { ContadorService } from './contador.service';

@NgModule({})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ContadorService]
        };
    }
}

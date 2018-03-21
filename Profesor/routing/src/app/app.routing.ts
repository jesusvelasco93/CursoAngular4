import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { USUARIO_ROUTES } from './usuario/usuario.routing';
import { ErrorComponent } from './error.component';
import { Aux1Reg1Component } from './aux-cmp/aux1-reg1.component';
import { Aux2Reg1Component } from './aux-cmp/aux2-reg1.component';
import { Aux1Reg2Component } from './aux-cmp/aux1-reg2.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'usuario/:id', component: UsuarioComponent, children: USUARIO_ROUTES },
    { path: 'inicio', component: InicioComponent },
    { path: 'aux1', component: Aux1Reg1Component, outlet: 'reg1' },
    { path: 'aux2', component: Aux2Reg1Component, outlet: 'reg1' },
    { path: 'aux1', component: Aux1Reg2Component, outlet: 'reg2' },
    { path: '**', component: ErrorComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

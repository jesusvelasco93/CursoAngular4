import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { USUARIO_ROUTES } from './usuario/usuario.routing';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'Inicio', pathMatch: 'full'},
    { path: 'Inicio', component: InicioComponent },
    { path: 'Usuario/:id', component: UsuarioComponent,
        children: USUARIO_ROUTES
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

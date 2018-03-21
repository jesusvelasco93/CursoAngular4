import { Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { InfoComponent } from './info/info.component';
import { InfoGuard } from './info/info.guard';
import { EditarGuard } from './editar/editar.guard';

export const USUARIO_ROUTES: Routes = [
    { path: 'info', component: InfoComponent, canActivate: [InfoGuard] },
    { path: 'editar', component: EditarComponent, canDeactivate: [EditarGuard] }
];

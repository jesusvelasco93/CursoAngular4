import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const APP_ROUTES: Routes = [
    { path: '', component: InicioComponent },
    { path: 'perezoso', loadChildren: '../perezoso/perezoso.module#PerezosoModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

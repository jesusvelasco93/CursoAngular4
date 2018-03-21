import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface ComponentCanDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class EditarGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(componente: ComponentCanDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return componente.canDeactivate ? componente.canDeactivate() : true;
  }
}

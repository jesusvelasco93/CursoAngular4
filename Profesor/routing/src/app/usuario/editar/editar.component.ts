import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: []
})
export class EditarComponent implements OnInit {
  guardado = false;
  subs: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subs = this.activatedRoute.queryParams.subscribe(
      (qParams) => {
        this.guardado = qParams['guardado'] == 'true';
      }
    );
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.guardado) {
      return confirm('Quieres salir sin guardar??');
    }
    return true;
  }

}

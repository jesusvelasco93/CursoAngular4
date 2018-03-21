import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: []
})
export class UsuarioComponent implements OnInit, OnDestroy {
  id = '';
  visible = true;
  subscription: Subscription;
  subs2: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    );
    this.subs2 = this.activatedRoute.queryParams.subscribe(
      (qParams) => {
        this.visible = qParams['visible'] || true;
      }
    );
  }

  guardar() {
    // Aquí iría la petición POST que guarda los datos de un formulario
    // Navegamos hasta otro componente
    this.router.navigate(['/']);
  }

  irAEditar() {
    this.router.navigate(['usuario', this.id, 'editar'], { queryParams: { guardado: true } });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  id = '';
  subscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params.id;
      }
    );
  }

  guardar() {
    //Aqui iria petición POST

    //Navegar hasta otro componente
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

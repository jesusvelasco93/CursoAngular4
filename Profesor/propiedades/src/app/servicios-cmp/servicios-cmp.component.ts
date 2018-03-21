import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-servicios-cmp',
  templateUrl: './servicios-cmp.component.html',
  styleUrls: ['./servicios-cmp.component.css']
})
export class ServiciosCmpComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  mostrarMensaje() {
    this.logService.escribirEnConsola('hola mundo!!!');
  }

}

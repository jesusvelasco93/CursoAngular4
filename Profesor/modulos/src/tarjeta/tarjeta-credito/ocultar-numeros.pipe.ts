import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarNumeros'
})
export class OcultarNumerosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const seccionOculta = value.slice(0, -4);
    const seccionVisible = value.slice(-4);
    return seccionOculta.replace(/\d/g, '*') + seccionVisible;
  }

}

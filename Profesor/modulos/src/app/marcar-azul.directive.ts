import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMarcarAzul]'
})
export class MarcarAzulDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMarcarRojo]'
})
export class MarcarRojoDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'red';
  }
}

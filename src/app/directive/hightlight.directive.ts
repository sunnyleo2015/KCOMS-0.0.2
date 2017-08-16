import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }

}

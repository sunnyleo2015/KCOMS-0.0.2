import { Directive, Output, EventEmitter, OnDestroy, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOutside]'
})
export class OutsideDirective implements OnInit, OnDestroy {
  @Output('appOutside') appOutside: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    console.log('init');
    document.addEventListener('click', (event) => {
      if (!isSelfOrAncestorNode(this.element.nativeElement, (event.target || event.srcElement) as Node)) {
        this.appOutside.emit();
      }
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('click');
  }
}

function isSelfOrAncestorNode(ancestor: Node, node: Node): boolean {
  while (node) {
    if (node === ancestor) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}


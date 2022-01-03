import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementStyle]'
})
export class ElementStyleDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.color') textColor

  @HostListener('click') onClick() {
    this.textColor = "#ffc107"
  }

}

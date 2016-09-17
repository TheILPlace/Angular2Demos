import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //constructor(private elementRef: ElementRef) {
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';

    constructor(private elementRef: ElementRef,private renderer : Renderer){
      this.renderer.setElementStyle(elementRef.nativeElement,'background-color','yellow');

   }

}

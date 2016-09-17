import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight-mouse-binding]'
})
export class HighlightMouseWithPropertyBindingDirective 
            implements OnInit {

private backgroundColor:string;

@Input() highlightColor = 'green';
@Input() defaultColor = 'white';
//@Input('externalName') internalName = 'bla';

//the event of the host element to listen to
@HostListener('mouseenter') mouseenter(){
    this.backgroundColor= this.highlightColor;
}

//the event of the host element to listen to
@HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor;
}

 numberOfClicks = 0;
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log("object", btn, "number of clicks:", this.numberOfClicks++);
  }



//the propety of the host element to bind to
// getter function - typescript
@HostBinding('style.backgroundColor') get getColor()
{
    return this.backgroundColor;

}

ngOnInit(){

    this.backgroundColor= this.defaultColor;

}

constructor(){
     
   }

}
